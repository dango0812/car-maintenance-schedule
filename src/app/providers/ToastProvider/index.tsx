import { useCallback, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';

import { For } from '~/shared/ui/For';
import { Toast } from '~/shared/ui/Toast';
import { ToastContext } from '~/shared/ui/Toast/context';

type ToastType = 'success' | 'error' | 'info';

interface Toast {
    /** Toast 고유 ID */
    id: string;
    /** Toast 메시지 */
    message: string;
    /** Toast 유형 */
    type: ToastType;
}

interface ToastProviderProps {
    /** 내부에 표시될 콘텐츠 */
    children: React.ReactNode;
    /* 표시할 최대 Toast 개수 (기본 값 : 5) */
    maxToast?: number;
}

export function ToastProvider({ children, maxToast = 5 }: ToastProviderProps) {
    const [toastList, setToastList] = useState<Toast[]>([]);

    // Toast 삭제
    const removeToast = useCallback((id: string, duration: number) => {
        setTimeout(() => {
            setToastList((prev) => prev.filter((toast) => toast.id !== id));
        }, duration);
    }, []);

    // Toast 추가
    const addToast = useCallback(
        (message: string, type: ToastType, duration = 5000) => {
            const id = Date.now().toString();

            setToastList((prev) => {
                const next = [...prev, { id, message, type }];
                // 최대 개수 초과 시 가장 오래된 Toast 제거
                return next.length > maxToast ? next.slice(1) : next;
            });

            // duration 후에 Toast 제거
            removeToast(id, duration);
        },
        [maxToast],
    );

    // Toast 닫기
    const handleCloseToast = useCallback((id: string) => {
        setToastList((prev) => prev.filter((toast) => toast.id !== id));
    }, []);

    const value = useMemo(
        () => ({
            success: (message: string, duration?: number) => addToast(message, 'success', duration),
            error: (message: string, duration?: number) => addToast(message, 'error', duration),
            info: (message: string, duration?: number) => addToast(message, 'info', duration),
        }),
        [addToast],
    );

    return (
        <ToastContext.Provider value={value}>
            {children}
            {createPortal(
                <Toast.Wrapper>
                    <For each={toastList}>
                        {({ id, message, type }) => (
                            <Toast.Item key={id} id={id} onClose={handleCloseToast} message={message} type={type} />
                        )}
                    </For>
                </Toast.Wrapper>,
                document.body,
            )}
        </ToastContext.Provider>
    );
}
