import { forwardRef } from 'react';
import clsx from 'clsx';

import { IconButtonStyle, type IconButtonVariants } from '~/shared/styles/base/iconButton.css';
import { sprinkles } from '~/shared/styles/sprinkles.css';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** 내부에 표시될 콘텐츠 */
    children: React.ReactNode;
    /** 추가 스타일 클래스 */
    className?: string;
    /** 스타일 "solid" | "soft" | "outlined" */
    variant?: NonNullable<IconButtonVariants>['variant'];
    /** 색상 "blue" | "green" | "grey" | "orange" | "red" */
    color?: NonNullable<IconButtonVariants>['color'];
    /** 사이즈 "sm" | "md" | "lg" */
    size?: NonNullable<IconButtonVariants>['size'];
    /** 인라인 스타일 객체 */
    style?: React.CSSProperties;
}

/**
 * IconButton 컴포넌트
 *
 * @param children - 내부에 표시될 콘텐츠
 * @param className - 추가 스타일 클래스
 * @param variant - "solid" | "soft"
 * @param color - "black" | "white" | "blue" | "green" | "grey" | "orange" | "red"
 * @param size - "sm" | "md" | "lg"
 * @param fullWidth - 100% 채울지 여부
 * @param loading - 로딩 상태 여부 (true일 경우 클릭이 방지되고, 스피너 표시)
 * @param startDecorator - 텍스트 앞에 표시될 아이콘이나 요소
 * @param onClick - 클릭 이벤트 핸들러
 * @param style - 인라인 스타일 객체
 *
 */
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
    ({ children, className, variant = 'solid', color = 'grey', size = 'md', ...rest }, ref) => (
        <button
            ref={ref}
            role="button"
            type="button"
            className={clsx(
                IconButtonStyle({ variant, color, size }),
                sprinkles({
                    position: 'relative',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                }),
                className,
            )}
            {...rest}
        >
            {children}
        </button>
    ),
);
