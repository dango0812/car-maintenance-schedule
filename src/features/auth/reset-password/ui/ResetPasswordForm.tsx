import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import type { ResetPasswordFormType } from '../model/useResetPassword';

import { passwordSchema } from '~/shared/lib/auth/yupSchema';
import { Button } from '~/shared/ui/Button';
import { FlexBox } from '~/shared/ui/FlexBox';
import { If } from '~/shared/ui/If';
import { FormProvider, RHFInput } from '~/shared/ui/RHF';
import { Spacing } from '~/shared/ui/Spacing';
import { Typography } from '~/shared/ui/Typography';

interface ResetPasswordFormProps {
    onSubmit: (data: ResetPasswordFormType) => void;
    errorMessage: string | null;
}

export function ResetPasswordForm({ onSubmit, errorMessage }: ResetPasswordFormProps) {
    const formSchema = Yup.object().shape({
        newPassword: passwordSchema,
    });

    const methods = useForm<ResetPasswordFormType>({
        resolver: yupResolver(formSchema),
        defaultValues: {
            newPassword: '',
        },
    });

    const {
        handleSubmit,
        formState: { isSubmitting },
    } = methods;

    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <FlexBox direction="column" gap="g8">
                <RHFInput name="newPassword" type="password" label="새로운 비밀번호" fullWidth />

                <If condition={Boolean(errorMessage)}>
                    <Typography variant="caption" color="red">
                        {errorMessage}
                    </Typography>
                </If>
            </FlexBox>

            <Spacing height="20px" />
            <Button type="submit" loading={isSubmitting} fullWidth>
                비밀번호 설정
            </Button>
        </FormProvider>
    );
}
