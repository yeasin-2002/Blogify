import axios from 'axios';
import { useEffect } from 'react';

import { useAuth } from '@/hooks';
import { axiosInstance, baseUrl } from '@/utils';

export const useAxios = () => {
  const authData = useAuth();

  useEffect(() => {
    const requestIntercept = axiosInstance.interceptors.request.use(
      (config) => {
        const token = authData.authToken?.accessToken;
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

        if (
          (error.response.status === 401 || error.response.status === 403) &&
          !originalRequest._retry
        ) {
          originalRequest._retry = true;

          try {
            const refreshToken = authData.authToken?.refreshToken;
            const response = await axios.post(baseUrl + '/auth/refresh-token', {
              refreshToken,
            });
            const { token } = response.data;

            console.log('🚀 ~ interceptor ~ token', token);

            if (authData.authToken?.refreshToken) {
              authData.setAuthToken({
                accessToken: token,
                refreshToken: authData.authToken?.refreshToken,
              });
            }
            if (authData.authUser) {
              authData.setAuthUser(authData.authUser);
            }

            originalRequest.headers.Authorization = `Bearer ${token}`;
            return axios(originalRequest);
          } catch (error) {
            console.log('🚀 ~ interceptor Err', error);
          }
        }
        // if (error.response.status === 403) {
        //   toast.error('Your session has expired, please login again');
        //   authData.logout();
        //   return navigate('/login');
        // }

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
