import { createElement, forwardRef } from 'react';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import clsx from 'clsx';

import { ButtonStyle, ButtonTextStyle, type ButtonVariants, TextVisibleVar } from '~/shared/styles/base/button.css';
import { sprinkles } from '~/shared/styles/sprinkles.css';
import { vars } from '~/shared/styles/vars.css';

import CircleProgress from '~/shared/assets/icons/circle-progress.svg?react';
import { If } from '~/shared/lib/If';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** 내부에 표시될 콘텐츠 */
    children: React.ReactNode;
    /** 추가 스타일 클래스 */
    className?: string;
    /** 스타일 "solid" | "soft" */
    variant?: NonNullable<ButtonVariants>['variant'];
    /** 색상 "black" | "blue" | "green" | "grey" | "orange" | "red" */
    color?: NonNullable<ButtonVariants>['color'];
    /** 사이즈 "sm" | "md" | "lg" */
    size?: NonNullable<ButtonVariants>['size'];
    /** 너비 100% 채울지 여부 */
    fullWidth?: boolean;
    /** 로딩 상태 여부 (true일 경우 클릭이 방지되고, 스피너 표시) */
    loading?: boolean;
    /** 텍스트 앞에 표시될 아이콘이나 요소 */
    startDecorator?: React.ReactNode;
    /** 클릭 이벤트 핸들러 */
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    /** 인라인 스타일 객체 */
    style?: React.CSSProperties;
}

/**
 * Button 공용 컴포넌트
 *
 * @param children - 내부에 표시될 콘텐츠
 * @param className - 추가 스타일 클래스
 * @param variant - "solid" | "soft"
 * @param color - "black" | "blue" | "green" | "grey" | "orange" | "red"
 * @param size - "sm" | "md" | "lg"
 * @param fullWidth - 100% 채울지 여부
 * @param loading - 로딩 상태 여부 (true일 경우 클릭이 방지되고, 스피너 표시)
 * @param startDecorator - 텍스트 앞에 표시될 아이콘이나 요소
 * @param onClick - 클릭 이벤트 핸들러
 * @param style - 인라인 스타일 객체
 *
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            children,
            className,
            variant = 'solid',
            color = 'blue',
            size = 'md',
            fullWidth = false,
            loading = false,
            startDecorator,
            onClick,
            ...rest
        },
        ref,
    ) => {
        const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            if (loading) {
                event.preventDefault();
                return;
            }

            onClick?.(event);
        };

        return (
            <button
                ref={ref}
                type="button"
                role="button"
                className={clsx(
                    ButtonStyle({ variant, color, size, fullWidth, loading }),
                    sprinkles({
                        position: 'relative',
                        cursor: loading ? 'not-allowed' : 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }),
                    className,
                )}
                disabled={loading}
                aria-busy={loading}
                aria-disabled={loading}
                onClick={handleClick}
                {...rest}
            >
                <If condition={loading}>
                    <span
                        className={sprinkles({
                            position: 'absolute',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        })}
                    >
                        <CircleProgress width={24} height={24} color={vars.colors.white} />
                    </span>
                </If>

                <span
                    className={clsx(
                        ButtonTextStyle,
                        sprinkles({
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }),
                    )}
                    style={assignInlineVars({
                        [TextVisibleVar]: loading ? 'hidden' : 'visible',
                    })}
                >
                    <If condition={Boolean(startDecorator)}>
                        {createElement(
                            'span',
                            {
                                className: sprinkles({
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                }),
                            },
                            startDecorator,
                        )}
                    </If>
                    {children}
                </span>
            </button>
        );
    },
);
