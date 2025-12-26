import type { ComponentProps, FormEventHandler, ReactNode } from 'react';
import { type FieldValues, FormProvider as RHFProvider, type UseFormReturn } from 'react-hook-form';

interface FormProviderProps<T extends FieldValues> extends Omit<ComponentProps<'form'>, 'onSubmit'> {
    /** form 내부에 렌더링될 자식 요소 */
    children: ReactNode;
    /**
     * react-hook-form의 useForm 반환값
     * (control, register, handleSubmit, formState 등 포함)
     */
    methods: UseFormReturn<T>;
    /** form submit 핸들러 */
    onSubmit?: FormEventHandler<HTMLFormElement>;
}

/**
 * FormProvider (React-Hook-Form)
 *
 * RHF FormProvider로 context를 내려줌
 * 실제 <form> 엘리먼트를 감싸는 UI 컨테이너
 *
 */
export function FormProvider<T extends FieldValues>({ children, onSubmit, methods, ...props }: FormProviderProps<T>) {
    return (
        <RHFProvider {...methods}>
            <form onSubmit={onSubmit} {...props}>
                {children}
            </form>
        </RHFProvider>
    );
}
