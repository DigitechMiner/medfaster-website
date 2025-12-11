import { apiRequest } from '@/lib/api/apiClient';
import { ENDPOINTS } from '@/lib/api/endpoints';
import type { UserType } from '@/lib/stores/types';

interface SendOtpPayload {
  email?: string;
  phone?: string;
  country_code?: string;
}

interface VerifyOtpPayload {
  email?: string;
  phone?: string;
  country_code?: string;
  otp: string;
}

const authService = {
  sendOtp: async (payload: SendOtpPayload, userType: UserType) => {
    const endpoint = userType === 'patient' 
      ? ENDPOINTS.PATIENT.SEND_OTP 
      : ENDPOINTS.CANDIDATE.SEND_OTP;

    return apiRequest(endpoint, {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  },

  verifyOtp: async (payload: VerifyOtpPayload, userType: UserType) => {
    const endpoint = userType === 'patient'
      ? ENDPOINTS.PATIENT.VALIDATE_OTP
      : ENDPOINTS.CANDIDATE.VALIDATE_OTP;

    return apiRequest(endpoint, {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  },

  getProfile: async (token: string, userType: UserType) => {
    const endpoint = userType === 'patient'
      ? ENDPOINTS.PATIENT.GET_PROFILE
      : ENDPOINTS.CANDIDATE.GET_PROFILE;

    return apiRequest(endpoint, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};

export default authService;
