import { create } from 'zustand';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';
import authService from '@/lib/services/auth.service';
import { TOKEN_EXPIRATION_MS } from '@/lib/constants';
import {
  AuthState,
  AuthStore,
  OtpCredential,
  OtpRequestPayload,
  VerifyOtpResult,
  ProfileResult,
  ApiEnvelope,
  VerifyOtpData,
  UserType,
} from './types';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DEFAULT_COUNTRY_CODE = '1'; // USA/Canada

const OTP_ERROR_MESSAGES: Record<string, string> = {
  '429': 'Too many OTP requests. Please try again later.',
  '400': 'Invalid request. Please check your input.',
  '404': 'User not found.',
  default: 'Something went wrong. Please try again.',
};

const resolveStatusMessage = (status: number | undefined, messages: Record<string, string>) => {
  if (status !== undefined) {
    const mapped = messages[String(status)];
    if (mapped) return mapped;
  }
  return messages.default;
};

const isHttpSuccess = (status: number) => status >= 200 && status < 300;

const isApiEnvelope = <T>(payload: unknown): payload is ApiEnvelope<T> =>
  Boolean(payload && typeof payload === 'object' && ('success' in (payload as any) || 'message' in (payload as any)));

const extractPayload = <T>(payload: any): T => {
  if (isApiEnvelope<T>(payload)) {
    const envelope = payload as ApiEnvelope<T>;
    if (envelope.data !== undefined) {
      return envelope.data as T;
    }
    // Use destructuring instead of delete to avoid TypeScript error
    const { success, message, data, ...rest } = envelope as any;
    return rest as unknown as T;
  }
  return payload;
};

const initialState: AuthState = {
  token: null,
  tokenSetAt: null,
  user: null,
  userType: null,
  otpCredential: null,
  otpRequestPayload: null,
  otpSending: false,
  otpError: null,
  otpLastSentAt: null,
};

/**
 * Check if token is expired (24 hours)
 */
const isTokenExpired = (tokenSetAt: number | null): boolean => {
  if (!tokenSetAt) return true;
  const tokenAge = Date.now() - tokenSetAt;
  return tokenAge >= TOKEN_EXPIRATION_MS;
};

export const useAuthStore = create<AuthStore>()(
  devtools(
    persist(
      (set, get) => ({
        ...initialState,
        
        setOtpCredential: (value) => set({ otpCredential: value }),
        setOtpError: (value) => set({ otpError: value }),
        setToken: (token) => set({ 
          token, 
          tokenSetAt: token ? Date.now() : null 
        }),
        setUser: (user) => set({ user }),
        setUserType: (userType) => set({ userType }),

        sendOtp: async ({ target, targetType, countryCode, userType }) => {
          set({ otpSending: true, otpError: null });
          
          try {
            const resolvedType = targetType ?? (EMAIL_REGEX.test(target) ? 'email' : 'phone');
            const resolvedCountryCode =
              resolvedType === 'phone' ? countryCode || DEFAULT_COUNTRY_CODE : undefined;

            const apiPayload =
              resolvedType === 'email'
                ? { email: target }
                : { phone: target, country_code: resolvedCountryCode };

            const responseData = await authService.sendOtp(apiPayload, userType);
            const response = responseData.data as ApiEnvelope;

            if (!response?.success) {
              const errorMessage =
                response?.message || resolveStatusMessage(responseData.status, OTP_ERROR_MESSAGES);
              set({ otpError: errorMessage });
              return { ok: false, message: errorMessage };
            }

            const credential: OtpCredential =
              resolvedType === 'email'
                ? { type: 'email', email: target }
                : { type: 'phone', phone: target, countryCode: resolvedCountryCode ?? null };

            const payload: OtpRequestPayload = {
              target,
              targetType: resolvedType,
              countryCode: resolvedType === 'phone' ? resolvedCountryCode : undefined,
            };

            set({
              otpCredential: credential,
              otpRequestPayload: payload,
              otpLastSentAt: Date.now(),
              userType,
            });

            return { ok: true, message: response.message || 'OTP sent successfully' };
          } catch (error: any) {
            const fallbackMessage = resolveStatusMessage(error.statusCode, OTP_ERROR_MESSAGES);
            set({ otpError: fallbackMessage });
            return { ok: false, message: fallbackMessage };
          } finally {
            set({ otpSending: false });
          }
        },

        verifyOtp: async (code: string, userType: UserType): Promise<VerifyOtpResult> => {
          const { otpCredential } = get();

          if (!otpCredential) {
            return { ok: false, message: 'OTP session expired. Please resend the code.' };
          }

          const payload =
            otpCredential.type === 'email'
              ? { email: otpCredential.email, otp: code }
              : {
                  phone: otpCredential.phone,
                  otp: code,
                  country_code: otpCredential.countryCode ?? undefined,
                };

          try {
            console.log('verifyOtp', payload);
            const res = await authService.verifyOtp(payload, userType);
            console.log('verifyOtp response', res);
            const json = res.data as ApiEnvelope<VerifyOtpData> & { token?: string };
            const success =
              typeof json?.success === 'boolean' ? json.success : isHttpSuccess(res.status);

            if (!success || !json?.data) {
              return { ok: false, message: json?.message || 'Invalid OTP' };
            }

            const token = json.data.token ?? json.token;

            if (!token) {
              return { ok: false, message: 'Token missing in response' };
            }

            // Set token with timestamp for 24-hour expiration
            set({ token, tokenSetAt: Date.now(), userType });

            // Mark as logged in for modal
            if (typeof window !== 'undefined') {
              localStorage.setItem('isLoggedIn', 'true');
            }

            return { ok: true, token, data: json.data };
          } catch (error: any) {
            const message = error?.message || 'Network error';
            return { ok: false, message };
          }
        },

        getProfile: async (token: string, userType: UserType): Promise<ProfileResult> => {
          try {
            console.log('getProfile api call', token, userType);
            const res = await authService.getProfile(token, userType);
            const json = res.data as ApiEnvelope<Record<string, any>>;

            const success =
              typeof json?.success === 'boolean' ? json.success : isHttpSuccess(res.status);

            if (!success) {
              return { ok: false, message: json?.message || 'Failed to fetch profile' };
            }

            const profile = json?.data ?? extractPayload<Record<string, any>>(json);
            
            // Update user in store
            set({ user: profile });
            
            return { ok: true, profile };
          } catch (error: any) {
            const message = error?.message || 'Failed to fetch profile';
            return { ok: false, message };
          }
        },

        logout: () => {
          // Clear localStorage
          if (typeof window !== 'undefined') {
            localStorage.removeItem('isLoggedIn');
          }
          
          // Reset all state to initial state
          set({ ...initialState });
          
          // Reload page
          if (typeof window !== 'undefined') {
            window.location.href = '/';
          }
        },
      }),
      {
        name: 'auth-storage',
        storage: createJSONStorage(() => localStorage),
        partialize: (state) => ({
          token: state.token,
          tokenSetAt: state.tokenSetAt,
          user: state.user,
          userType: state.userType,
        }),
        onRehydrateStorage: () => (state) => {
          // Check token expiration when store is rehydrated from localStorage
          if (state?.token && state?.tokenSetAt) {
            if (isTokenExpired(state.tokenSetAt)) {
              console.log('Token expired, clearing auth state');
              // Clear expired token and user
              state.setToken(null);
              state.setUser(null);
              state.setUserType(null);
            }
          }
        },
      },
    ),
    { name: 'AuthStore' }
  ),
);
