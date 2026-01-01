import type { AxiosError, AxiosRequestConfig } from 'axios';

import { axiosInstance } from './instance';

export const isHttpError = (error: unknown) => {
    if (error instanceof Error || (error as AxiosError)?.isAxiosError) {
        throw error;
    }
};

type HttpMethod = 'get' | 'post' | 'put' | 'patch' | 'delete';

const request = async <T>(method: HttpMethod, url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> => {
    const response = await axiosInstance.request<T>({
        ...config,
        url,
        method,
        data,
    });
    return response.data;
};

export const http = {
    get: <T>(url: string, config?: AxiosRequestConfig) => request<T>('get', url, undefined, config),
    post: <T>(url: string, data?: unknown, config?: AxiosRequestConfig) => request<T>('post', url, data, config),
    put: <T>(url: string, data?: unknown, config?: AxiosRequestConfig) => request<T>('put', url, data, config),
    delete: <T>(url: string, config?: AxiosRequestConfig) => request<T>('delete', url, undefined, config),
    patch: <T>(url: string, data?: unknown, config?: AxiosRequestConfig) => request<T>('patch', url, data, config),
};
