import { forwardRef, useId } from 'react';
import clsx from 'clsx';

import * as styles from '~/shared/styles/base/input.css';
import { type InputVariants } from '~/shared/styles/base/input.css';
import { sprinkles } from '~/shared/styles/sprinkles.css';

import { If } from '~/shared/lib/If';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    /** 스타일 "solid" | "outlined"*/
    variant?: NonNullable<InputVariants>['variant'];
    /** 색상 "blue" | "green" | "grey" | "orange" | "red" */
    color?: NonNullable<InputVariants>['color'];
    /** 사이즈 "sm" | "md" | "lg" */
    size?: NonNullable<InputVariants>['size'];
    /** 입력 필드 상단에 표시될 이름 */
    label?: string;
    /** 입력 필드 앞쪽에 표시될 아이콘이나 요소 */
    startDecorator?: React.ReactNode;
    /** 하단에 표시될 안내 문구 또는 에러 메시지 */
    helperText?: string;
    /** 에러 상태 여부 */
    error?: boolean;
    /** 너비 100% 채울지 여부 */
    fullWidth?: boolean;
    /** 추가 스타일 클래스 */
    className?: string;
    /** 인라인 스타일 객체 */
    style?: React.CSSProperties;
}

/**
 * Input 공용 컴포넌트
 *
 * @param variant - "solid" | "outlined"
 * @param color - "blue" | "green" | "grey" | "orange" | "red"
 * @param size - "sm" | "md" | "lg"
 * @param label - 상단에 표시될 이름
 * @param startDecorator - 앞쪽에 표시될 아이콘이나 요소
 * @param helperText - 하단에 표시될 안내 문구 또는 에러 메시지
 * @param error - 에러 상태 여부 (true일 경우 강조 색상 표시)
 * @param fullWidth - 너비 100% 채울지 여부
 * @param className - 추가 스타일 클래스
 * @param style - 인라인 스타일 객체
 *
 */
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
                <If condition={Boolean(label)}>
                    <label htmlFor={inputId} className={styles.LabelStyle({ size })}>
                        {required && (
                            <span className={styles.RequiredMarkStyle} aria-label="required">
                                *
                            </span>
                        )}
                        {label}
                    </label>
                </If>

                <div
                    className={sprinkles({
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                    })}
                >
                    <If condition={Boolean(startDecorator)}>
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
                    </If>

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

                <If condition={Boolean(helperText)}>
                    <p className={styles.HelperTextStyle({ error, disabled })} role={error ? 'alert' : undefined}>
                        {helperText}
                    </p>
                </If>
            </div>
        );
    },
);
