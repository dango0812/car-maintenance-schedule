import { AnimatePresence, m } from 'motion/react';

import Asset from '../Asset';
import { FlexBox } from '../FlexBox';
import { IconButton } from '../IconButton';

import { ToastItemStyle, type ToastVariants, ToastWrapperStyle } from '~/shared/styles/base/toast.css';
import { vars } from '~/shared/styles/vars.css';

interface ToastProps {
    /** 내부에 표시될 콘텐츠 */
    children: React.ReactNode;
}

interface ToastItem {
    /** Toast 고유 ID */
    id: string;
    /** Toast 닫기 */
    onClose: (id: string) => void;
    /** Toast 메시지 */
    message: string;
    /** Toast 유형 */
    type: Exclude<NonNullable<ToastVariants>['type'], undefined>;
}

const TOAST_COLOR_MAPPING = {
    success: vars.colors.green,
    error: vars.colors.red,
    info: vars.colors.blue,
} as const;

/**
 *
 * Toast Item 컴포넌트
 *
 * @param id - Toast 고유 ID
 * @param onClose - Toast 닫기 함수
 * @param message - Toast 메시지
 * @param type - 'success' | 'error' | 'info'
 */
function Item({ id, onClose, message, type }: ToastItem) {
    return (
        <m.div
            layout
            initial={{
                opacity: 0,
                y: -20,
                scale: 0.9,
            }}
            animate={{
                opacity: 1,
                y: 0,
                scale: 1,
            }}
            exit={{
                opacity: 0,
                scale: 0.8,
                transition: {
                    duration: 0.2,
                },
            }}
            className={ToastItemStyle({ type })}
        >
            <FlexBox alignItems="center" justifyContent="space-between">
                <FlexBox alignItems="center" justifyContent="flex-start" gap="g12">
                    <Asset.Icon name={type} width={24} height={24} color={TOAST_COLOR_MAPPING[type][800]} />
                    {message}
                </FlexBox>

                <IconButton variant="soft" size="sm" color="white" aria-label="Close Toast" onClick={() => onClose(id)}>
                    <Asset.Icon name="close" width={24} height={24} />
                </IconButton>
            </FlexBox>
        </m.div>
    );
}

/**
 *
 * Toast Wrapper 컴포넌트
 * @param children - 내부에 표시될 콘텐츠
 */
function Wrapper({ children }: ToastProps) {
    return (
        <FlexBox className={ToastWrapperStyle} direction="column" alignItems="center" justifyContent="center">
            <AnimatePresence>{children}</AnimatePresence>
        </FlexBox>
    );
}

export const Toast = {
    Wrapper,
    Item,
};
