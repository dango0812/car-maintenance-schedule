import { forwardRef, useEffect, useRef } from 'react';
import clsx from 'clsx';
import ReactDOM from 'react-dom';

import { ModalStyle, OverlayStyle } from 'styles/base/modal.css';
import { sprinkles } from 'styles/sprinkles.css';

export interface ModalProps {
    open: boolean;
    onClose?: () => void;
    children: React.ReactNode;
    className?: string;
}

export const Modal = forwardRef<HTMLDivElement, ModalProps>(({ open, onClose, children, className, ...rest }, ref) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const mouseStartedRef = useRef(false);

    useEffect(() => {
        // 모달이 열려있을 때, 스크롤이 되지 않도록 설정합니다.
        if (open) {
            const orgValue = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = orgValue;
            };
        }
    }, [open]);

    if (!open) {
        return null;
    }

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const contentEl = contentRef.current;
        const clickInside = Boolean(contentEl && contentEl.contains(event.target as Node));

        // 마우스가 모달 내부에서 클릭되었을 때는 닫기 동작을 수행하지 않습니다. (예: 드래그 등)
        if (mouseStartedRef.current) {
            mouseStartedRef.current = false;
            return;
        }

        // 클릭 영역이 모달 바깥인 경우 모달을 닫습니다.
        if (!clickInside) {
            onClose?.();
        }
    };

    // 마우스 클릭이 모달 내부에서 시작되었는지를 기록합니다.
    // → 이후 클릭이 해제될 때 모달을 닫을지 여부를 판단하는 기준으로 사용됩니다.
    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
        const contentEl = contentRef.current;
        mouseStartedRef.current = Boolean(contentEl && contentEl.contains(event.target as Node));
    };

    return ReactDOM.createPortal(
        <div
            ref={ref}
            role="dialog"
            aria-modal="true"
            aria-hidden={!open}
            onMouseDown={handleMouseDown}
            onClick={handleClick}
            className={clsx(
                OverlayStyle,
                sprinkles({
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }),
            )}
        >
            <div ref={contentRef} className={clsx(ModalStyle, className)} {...rest}>
                {children}
            </div>
        </div>,
        document.body,
    );
});
