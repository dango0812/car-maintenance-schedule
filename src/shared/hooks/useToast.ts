import { useContext } from 'react';

import { ToastContext } from '../ui/Toast/context';

export function useToast() {
    const context = useContext(ToastContext);
    if (!context) throw new Error('useToast 는 ToastProvider 로 감싸진 컴포넌트에서만 사용할 수 있습니다.');
    return context;
}
