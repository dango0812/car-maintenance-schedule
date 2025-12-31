import { createContext } from 'react';

export interface ToastContextProps {
    success: (message: string, duration?: number) => void;
    error: (message: string, duration?: number) => void;
    info: (message: string, duration?: number) => void;
}

export const ToastContext = createContext<ToastContextProps | null>(null);
