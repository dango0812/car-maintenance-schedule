import clsx from 'clsx';

import { CardStyle, type CardVariants } from '~/shared/styles/base/card.css';
import { sprinkles } from '~/shared/styles/sprinkles.css';

export interface CardProps {
    /** 내부에 표시될 콘텐츠 */
    children: React.ReactNode;
    /** 추가 스타일 클래스 */
    className?: string;
    /** 스타일 "solid" | "outlined" | "soft" */
    variant?: NonNullable<CardVariants>['variant'];
    /** 색상 "blue" | "green" | "grey" | "orange" | "red" | "white" */
    color?: NonNullable<CardVariants>['color'];
    /** 사이즈 "sm" | "md" | "lg" */
    size?: NonNullable<CardVariants>['size'];
    /** 그림자 "sm" | "md" | "lg" */
    shadow?: NonNullable<CardVariants>['shadow'];
    /** 인라인 스타일 객체 */
    style?: React.CSSProperties;
}

/**
 * Card 컴포넌트
 *
 * @param children - 내부에 표시될 콘텐츠
 * @param className - 추가 스타일 클래스
 * @param variant - "solid" | "outlined" | "soft"
 * @param color - "blue" | "green" | "grey" | "orange" | "red" | "white"
 * @param size - "sm" | "md" | "lg"
 * @param shadow - "sm" | "md" | "lg"
 * @param style - 인라인 스타일 객체
 *
 */

export function Card({ children, className, variant, color, size, shadow, style }: CardProps) {
    return (
        <div
            className={clsx(
                CardStyle({ variant, color, size, shadow }),
                sprinkles({
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                }),
                className,
            )}
            style={style}
        >
            {children}
        </div>
    );
}
