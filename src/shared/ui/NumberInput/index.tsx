import { forwardRef, useCallback } from 'react';
import clsx from 'clsx';
import { isNumber } from 'es-toolkit/compat';

import { Input, type InputProps } from '../Input';

import * as styles from '~/shared/styles/base/input.css';

export interface NumberInputProps extends Omit<InputProps, 'onChange' | 'type' | 'inputMode' | 'value'> {
    /** 최소 값 */
    minNumber?: number;
    /** 최대 값 */
    maxNumber?: number;
    /** 입력된 값 */
    value: number;
    /** 값 변경 시, 추가 동작을 위한 콜백 함수 */
    onChange: (value: number) => void;
    /** 에러 상태 여부 */
    error?: boolean;
    /** 추가 스타일 클래스 */
    className?: string;
}

/**
 * NumberInput 공용 컴포넌트
 *
 * @param value - 입력된 값
 * @param minNumber - 최소 값
 * @param maxNumber - 최대 값
 * @param onChange - 값 변경 시, 추가 동작을 위한 콜백 함수
 * @param error - 에러 상태 여부
 * @param className - 추가 스타일 클래스
 *
 */
export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
    ({ value, minNumber, maxNumber, onChange, error, className, ...rest }, ref) => {
        const handleChange = useCallback(
            (event: React.ChangeEvent<HTMLInputElement>) => {
                const { valueAsNumber } = event.target;
                if (!isNumber(valueAsNumber)) {
                    return;
                }

                onChange?.(valueAsNumber);
            },
            [onChange],
        );

        const internalError =
            (minNumber !== undefined && value < minNumber) || (maxNumber !== undefined && value > maxNumber);

        const isError = error ?? internalError;

        return (
            <Input
                ref={ref}
                type="number"
                inputMode="numeric"
                value={value}
                className={clsx(
                    styles.InputStyle({
                        error: isError,
                    }),
                    className,
                )}
                onChange={handleChange}
                error={isError}
                {...rest}
            />
        );
    },
);
