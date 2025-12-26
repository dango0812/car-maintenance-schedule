import { Controller, useFormContext } from 'react-hook-form';

import { Input, type InputProps } from '../Input';

interface RHFInputProps extends Omit<InputProps, 'name' | 'value' | 'onChange' | 'onBlur'> {
    /** react-hook-form field name */
    name: string;
}

/**
 * RHFInput
 *
 * react-hook-form의 Controller를 내부에서 사용
 * Input 컴포넌트를 RHF와 연결
 *
 */
export function RHFInput({ name, type, helperText, ...rest }: RHFInputProps) {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <Input
                    {...rest}
                    {...field}
                    type={type}
                    fullWidth
                    error={!!error}
                    helperText={error?.message ?? helperText}
                    value={field?.value ?? ''}
                    onChange={(event) => field.onChange(event.target.value)}
                />
            )}
        />
    );
}
