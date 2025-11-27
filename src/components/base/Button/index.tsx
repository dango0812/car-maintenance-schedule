import { createElement, forwardRef } from 'react';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import CircleProgress from 'assets/circle-progress.svg?react';
import clsx from 'clsx';

import { ButtonStyle, ButtonTextStyle, type ButtonVariants, TextVisibleVar } from 'styles/base/button.css';
import { sprinkles } from 'styles/sprinkles.css';
import { vars } from 'styles/vars.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    variant?: NonNullable<ButtonVariants>['variant'];
    color?: NonNullable<ButtonVariants>['color'];
    size?: NonNullable<ButtonVariants>['size'];
    fullWidth?: boolean;
    loading?: boolean;
    startDecorator?: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

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
                {loading && (
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
                )}

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
                    {startDecorator &&
                        createElement(
                            'span',
                            {
                                className: sprinkles({
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                }),
                            },
                            startDecorator,
                        )}
                    {children}
                </span>
            </button>
        );
    },
);
