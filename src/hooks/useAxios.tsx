import axios, { AxiosError } from "axios";
import { useEffect } from "react";

import { useAuth } from "@/hooks";
import { axiosInstance, baseUrl } from "@/utils";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useAxios = () => {
  const authData = useAuth();
  const navigate = useNavigate();

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
          try {
            originalRequest._retry = true;
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
            if (
              error instanceof AxiosError &&
              error?.response?.status === 500 &&
              error?.response?.data.error === "jwt expired"
            ) {
              navigate("/login");
              toast.error("Session expired, please login again");
            }
          }
        }

        return Promise.reject(error);
      },
    );

    return () => {
      axiosInstance.interceptors.request.eject(requestIntercept);
      axiosInstance.interceptors.response.eject(responseIntercept);
    };
  }, [authData, navigate]);

  return axiosInstance;
};
