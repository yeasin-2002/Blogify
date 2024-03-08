import axios from "axios";
import { useEffect } from "react";

import { useAuth } from "@/hooks";
import { axiosInstance, baseUrl } from "@/utils";

export const useAxios = () => {
  const authData = useAuth();

  useEffect(() => {
    const requestIntercept = axiosInstance.interceptors.request.use(
      (config) => {
        const token = authData?.authToken?.accessToken;
        if (token) {
          config.headers.Authorization = `Bearer ${token} `;
        }
        return config;
      },
      (error) => Promise.reject(error),
    );

    const responseIntercept = axiosInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        if (error?.response?.status === 403 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            const response = await axios.post(baseUrl + "/auth/refresh-token", {
              refreshToken: authData?.authToken?.refreshToken,
            });

            const { accessToken, refreshToken } = response.data;

            authData?.setAuthToken({
              accessToken: accessToken,
              refreshToken: refreshToken,
            });

            originalRequest.headers.Authorization = `Bearer ${accessToken}`;
            return axios(originalRequest);
          } catch (error) {
            throw error;
          }
        }

        return Promise.reject(error);
      },
    );

    return () => {
      axiosInstance.interceptors.request.eject(requestIntercept);
      axiosInstance.interceptors.response.eject(responseIntercept);
    };
  }, []);

  return axiosInstance;
};
