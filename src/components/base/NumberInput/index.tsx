import { forwardRef, useCallback } from 'react';
import clsx from 'clsx';
import { isNumber } from 'es-toolkit/compat';

import { Input, type InputProps } from 'src/components/base/Input';

import * as styles from 'src/styles/base/input.css';

export interface NumberInputProps extends Omit<InputProps, 'onChange' | 'type' | 'inputMode' | 'value'> {
    minNumber?: number;
    maxNumber?: number;
    value: number;
    onChange: (value: number) => void;
    error?: boolean;
    className?: string;
}

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
