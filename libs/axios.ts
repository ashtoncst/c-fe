import axios, {
  AxiosError,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from "axios";
import toast from "react-hot-toast";
import { getApiUrl } from "../config/defaults";

// Per-request opt-out for the global error toaster. Use for best-effort
// background calls (chat session bootstrap, history restore) that already
// tolerate failure and must not surface a scary toast to the user when the
// REST backend is unreachable.
declare module "axios" {
  export interface AxiosRequestConfig {
    skipGlobalErrorToast?: boolean;
  }
}

// Get API URL with fallback to default
const API_URL = getApiUrl();

// Ensure API URL includes /api prefix for backend routes
const BASE_URL = API_URL.endsWith("/api") ? API_URL : `${API_URL}/api`;

// [SECURITY FIX] Removed debug console.log statements that printed the API
// base URL to the browser console, exposing internal infrastructure details
// to anyone with DevTools open.
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Request interceptor for adding auth token, etc
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Get token from localStorage if in browser environment
    // if (typeof window !== 'undefined') {
    //   const token = localStorage.getItem('auth_token');
    //   if (token) {
    //     config.headers.Authorization = `Bearer ${token}`;
    //   }
    // }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling errors
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    const skipToast = error.config?.skipGlobalErrorToast === true;

    if (error.code === "ECONNABORTED") {
      if (!skipToast) {
        toast.error("Request timed out. Please try again.", {
          id: "error-timeout",
          duration: 4000,
        });
      }
    } else if (error.response) {
      const { status } = error.response;

      if (status === 401) {
        if (typeof window !== "undefined") {
          localStorage.removeItem("auth_token");
        }
      } else if (status === 429) {
        if (!skipToast) {
          toast.error("Too many requests. Please wait a moment and try again.", {
            id: "error-rate-limit",
            duration: 4000,
          });
        }
      } else if (status >= 500) {
        if (!skipToast) {
          toast.error(
            "Something went wrong on our end. Please try again later.",
            { id: "error-server", duration: 4000 }
          );
        }
      }
    } else if (error.request) {
      if (!skipToast) {
        toast.error(
          "Unable to connect. Please check your internet connection.",
          { id: "error-network", duration: 4000 }
        );
      }
    }

    return Promise.reject(error);
  }
);

// API function helpers
export const api = {
  get: <T>(url: string, config = {}) => axiosInstance.get<T>(url, config),

  post: <T>(url: string, data = {}, config = {}) =>
    axiosInstance.post<T>(url, data, config),

  put: <T>(url: string, data = {}, config = {}) =>
    axiosInstance.put<T>(url, data, config),

  patch: <T>(url: string, data = {}, config = {}) =>
    axiosInstance.patch<T>(url, data, config),

  delete: <T>(url: string, config = {}) => axiosInstance.delete<T>(url, config),
};

export default axiosInstance;
