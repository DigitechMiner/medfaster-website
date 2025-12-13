'use client';

import { create } from 'zustand';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { devtools } from 'zustand/middleware';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api/v1';

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
}

export class ApiError extends Error {
  constructor(
    public statusCode: number,
    message: string,
    public data?: any
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

interface ApiStoreState {
  axiosInstance: AxiosInstance;
  isLoading: boolean;
  error: string | null;
}

interface ApiStoreActions {
  request: <T = any>(
    config: AxiosRequestConfig
  ) => Promise<{ data: T; status: number }>;
  get: <T = any>(url: string, config?: AxiosRequestConfig) => Promise<{ data: T; status: number }>;
  post: <T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ) => Promise<{ data: T; status: number }>;
  put: <T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ) => Promise<{ data: T; status: number }>;
  patch: <T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ) => Promise<{ data: T; status: number }>;
  delete: <T = any>(url: string, config?: AxiosRequestConfig) => Promise<{ data: T; status: number }>;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

type ApiStore = ApiStoreState & ApiStoreActions;

// Create axios instance
const createAxiosInstance = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Request interceptor to add auth token
  instance.interceptors.request.use(
    (config) => {
      if (typeof window !== 'undefined') {
        const token = localStorage.getItem('auth_token');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Response interceptor for error handling
  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error: AxiosError) => {
      if (error.response) {
        // Server responded with error status
        const status = error.response.status;
        const message =
          (error.response.data as any)?.message ||
          error.message ||
          'An error occurred';
        throw new ApiError(status, message, error.response.data);
      } else if (error.request) {
        // Request made but no response received
        throw new ApiError(500, 'Network error occurred', error.request);
      } else {
        // Something else happened
        throw new ApiError(500, error.message || 'An unexpected error occurred');
      }
    }
  );

  return instance;
};

export const useApiStore = create<ApiStore>()(
  devtools(
    (set, get) => ({
      axiosInstance: createAxiosInstance(),
      isLoading: false,
      error: null,

      setLoading: (loading: boolean) => set({ isLoading: loading }),
      setError: (error: string | null) => set({ error }),

      request: async <T = any>(config: AxiosRequestConfig) => {
        set({ isLoading: true, error: null });
        try {
          const response: AxiosResponse<T> = await get().axiosInstance.request<T>(config);
          set({ isLoading: false });
          return {
            data: response.data,
            status: response.status,
          };
        } catch (error) {
          set({ isLoading: false });
          if (error instanceof ApiError) {
            set({ error: error.message });
            throw error;
          }
          const apiError = new ApiError(500, 'An unexpected error occurred');
          set({ error: apiError.message });
          throw apiError;
        }
      },

      get: async <T = any>(url: string, config?: AxiosRequestConfig) => {
        return get().request<T>({ ...config, method: 'GET', url });
      },

      post: async <T = any>(url: string, data?: any, config?: AxiosRequestConfig) => {
        return get().request<T>({ ...config, method: 'POST', url, data });
      },

      put: async <T = any>(url: string, data?: any, config?: AxiosRequestConfig) => {
        return get().request<T>({ ...config, method: 'PUT', url, data });
      },

      patch: async <T = any>(url: string, data?: any, config?: AxiosRequestConfig) => {
        return get().request<T>({ ...config, method: 'PATCH', url, data });
      },

      delete: async <T = any>(url: string, config?: AxiosRequestConfig) => {
        return get().request<T>({ ...config, method: 'DELETE', url });
      },
    }),
    { name: 'ApiStore' }
  )
);
