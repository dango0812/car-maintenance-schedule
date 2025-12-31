import clsx from 'clsx';

import { ContainerStyle, type ContainerVariants } from '~/shared/styles/base/container.css';
import { sprinkles } from '~/shared/styles/sprinkles.css';

export interface ContainerProps {
    /** 내부에 표시될 콘텐츠 */
    children: React.ReactNode;
    /** 추가 스타일 클래스 */
    className?: string;
    /**
     * 사이즈 |
     * sm : 600px |
     * md : 900px |
     * lg : 1200px |
     * xl : 1536px
     */
    size?: NonNullable<ContainerVariants>['size'];
    /** 너비 100% 채울지 여부 */
    fullWidth?: NonNullable<ContainerVariants>['fullWidth'];
    /** 인라인 스타일 객체 */
    style?: React.CSSProperties;
}

/**
 * Container 컴포넌트
 *
 * @param children - 내부에 표시될 콘텐츠
 * @param className - 추가 스타일 클래스
 * @param size - "sm" | "md" | "lg" | "xl"
 * @param fullWidth - 너비를 100%로 채울지 여부
 * @param style - 인라인 스타일 객체
 *
 */
export function Container({ children, className, size, fullWidth, style }: ContainerProps) {
    return (
        <div
            className={clsx(
                ContainerStyle({ size, fullWidth }),
                sprinkles({
                    display: 'flex',
                    flexDirection: 'row',
                }),
                className,
            )}
            style={style}
        >
            {children}
        </div>
    );
}
