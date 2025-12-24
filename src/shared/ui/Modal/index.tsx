import { useEffect, useRef } from 'react';
import clsx from 'clsx';
import ReactDOM from 'react-dom';

import { ModalStyle, OverlayStyle } from '~/shared/styles/base/modal.css';
import { sprinkles } from '~/shared/styles/sprinkles.css';

export interface ModalProps {
    /** 모달 노출 여부 */
    open: boolean;
    /** 닫기 동작이 발생할 때 호출되는 함수 */
    onClose?: () => void;
    /** 내부에 표시될 콘텐츠 */
    children: React.ReactNode;
    /** 추가 스타일 클래스 */
    className?: string;
    /** 인라인 스타일 객체 */
    style?: React.CSSProperties;
}

/**
 * Modal 공용 컴포넌트
 *
 * @param open - 노출 여부
 * @param onClose - 닫기 동작이 발생할 때 호출되는 함수
 * @param children - 내부에 표시될 콘텐츠
 * @param className - 추가 스타일 클래스
 * @param style - 인라인 스타일 객체
 *
 */
export function Modal({ open, onClose, children, className }: ModalProps) {
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
            <div ref={contentRef} className={clsx(ModalStyle, className)}>
                {children}
            </div>
        </div>,
        document.body,
    );
}
