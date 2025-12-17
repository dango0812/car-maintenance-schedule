import { forwardRef, useId } from 'react';
import clsx from 'clsx';

import * as styles from 'src/styles/base/input.css';
import { type InputVariants } from 'src/styles/base/input.css';
import { sprinkles } from 'src/styles/sprinkles.css';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    variant?: NonNullable<InputVariants>['variant'];
    color?: NonNullable<InputVariants>['color'];
    size?: NonNullable<InputVariants>['size'];
    label?: string;
    startDecorator?: React.ReactNode;
    helperText?: string;
    error?: boolean;
    fullWidth?: boolean;
    className?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            variant = 'outlined',
            color = 'grey',
            size = 'md',
            label,
            startDecorator,
            helperText,
            fullWidth = false,
            error = false,
            disabled = false,
            required = false,
            className,
            ...rest
        },
        ref,
    ) => {
        const inputId = useId();
        return (
            <div
                className={clsx(
                    styles.ContainerStyle({ fullWidth }),
                    sprinkles({
                        display: 'flex',
                        flexDirection: 'column',
                    }),
                )}
            >
                {label && (
                    <label htmlFor={inputId} className={styles.LabelStyle({ size })}>
                        {required && (
                            <span className={styles.RequiredMarkStyle} aria-label="required">
                                *
                            </span>
                        )}
                        {label}
                    </label>
                )}

                <div
                    className={sprinkles({
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                    })}
                >
                    {startDecorator && (
                        <span
                            className={clsx(
                                styles.StartDecoratorStyle({ disabled }),
                                sprinkles({
                                    position: 'absolute',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }),
                            )}
                            aria-hidden="true"
                        >
                            {startDecorator}
                        </span>
                    )}

                    <input
                        ref={ref}
                        id={inputId}
                        disabled={disabled}
                        required={required}
                        aria-invalid={error}
                        className={clsx(
                            styles.InputStyle({
                                variant,
                                color,
                                size,
                                fullWidth,
                                error,
                                hasStartDecorator: Boolean(startDecorator),
                            }),
                            className,
                        )}
                        {...rest}
                    />
                </div>

                {helperText && (
                    <p className={styles.HelperTextStyle({ error, disabled })} role={error ? 'alert' : undefined}>
                        {helperText}
                    </p>
                )}
            </div>
        );
    },
);
