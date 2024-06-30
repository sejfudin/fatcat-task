import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';
import { BASE_URL } from '@homework-task/utils/constants';

const defaultOptions: AxiosRequestConfig = {
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
};

const axiosInstance: AxiosInstance = axios.create(defaultOptions);

export const setHeaders = (headers: AxiosRequestConfig['headers']) => {
    Object.assign(axiosInstance.defaults.headers, headers);
};

export default axiosInstance;
