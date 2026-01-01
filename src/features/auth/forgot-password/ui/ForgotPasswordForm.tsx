import { useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import type { ForgotPasswordFormType } from '../model/useForgotPassword';

import { useUserStore } from '~/entities/user';
import { paths } from '~/shared/constants/paths';
import { emailSchema } from '~/shared/lib/auth/yupSchema';
import { supabase } from '~/shared/lib/supabaseClient';
import { Button } from '~/shared/ui/Button';
import { FlexBox } from '~/shared/ui/FlexBox';
import { If } from '~/shared/ui/If';
import { FormProvider, RHFInput } from '~/shared/ui/RHF';
import { Typography } from '~/shared/ui/Typography';

interface ForgotPasswordFormProps {
    onSubmit: (data: ForgotPasswordFormType) => void;
    errorMessage: string | null;
}

export function ForgotPasswordForm({ onSubmit, errorMessage }: ForgotPasswordFormProps) {
    const navigate = useNavigate();
    const setUser = useUserStore((state) => state.setUser);

    const formSchema = Yup.object().shape({
        email: emailSchema,
    });

    const methods = useForm<ForgotPasswordFormType>({
        resolver: yupResolver(formSchema),
        defaultValues: {
            email: '',
        },
    });

    const {
        handleSubmit,
        formState: { isSubmitting },
    } = methods;

    const handleFocus = async () => {
        try {
            const { data } = await supabase.auth.getSession();
            const { session } = data;

            if (session && session.user.email_confirmed_at) {
                setUser(session.user);
                navigate(paths.dashboard);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        window.addEventListener('focus', handleFocus);

        return () => {
            window.removeEventListener('focus', handleFocus);
        };
    }, []);

    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <FlexBox direction="column" gap="g20">
                <RHFInput name="email" label="이메일" fullWidth />

                <If condition={Boolean(errorMessage)}>
                    <Typography variant="caption" color="red">
                        {errorMessage}
                    </Typography>
                </If>

                <Button type="submit" loading={isSubmitting} fullWidth>
                    이메일 인증하기
                </Button>
            </FlexBox>
        </FormProvider>
    );
}
