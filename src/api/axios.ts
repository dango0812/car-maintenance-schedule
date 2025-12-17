import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: '/',
    timeout: 5000,
});

axiosInstance.interceptors.response.use(
    (res) => res,
    (err) => {
        console.error('[Axios Error]', err.response?.status, err.message);
        return Promise.reject(err);
    },
);
