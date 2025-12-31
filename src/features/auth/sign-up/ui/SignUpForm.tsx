import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { type SignUpFormType } from '../model/useSignUp';

import { sprinkles } from '~/shared/styles/sprinkles.css';
import { vars } from '~/shared/styles/vars.css';

import { confirmPasswordSchema, emailSchema, passwordSchema } from '~/shared/lib/auth/yupSchema';
import { paths } from '~/shared/routes';
import { Button } from '~/shared/ui/Button';
import { FlexBox } from '~/shared/ui/FlexBox';
import { If } from '~/shared/ui/If';
import { FormProvider, RHFInput } from '~/shared/ui/RHF';
import { Spacing } from '~/shared/ui/Spacing';
import { Typography } from '~/shared/ui/Typography';

interface SignUpFormProps {
    onSubmit: (data: SignUpFormType) => void;
    errorMessage: string | null;
}

export function SignUpForm({ onSubmit, errorMessage }: SignUpFormProps) {
    const formSchema = Yup.object().shape({
        email: emailSchema,
        password: passwordSchema,
        confirmPassword: confirmPasswordSchema,
    });

    const methods = useForm<SignUpFormType>({
        resolver: yupResolver(formSchema),
        defaultValues: {
            email: '',
            password: '',
            confirmPassword: '',
        },
    });

    const {
        handleSubmit,
        formState: { isSubmitting },
    } = methods;

    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <FlexBox direction="column" gap="g8">
                <RHFInput name="email" label="이메일" fullWidth />
                <RHFInput name="password" type="password" label="비밀번호" fullWidth />
                <RHFInput name="confirmPassword" type="password" label="비밀번호 확인" fullWidth />

                <If condition={Boolean(errorMessage)}>
                    <Typography variant="caption" color="red">
                        {errorMessage}
                    </Typography>
                </If>
            </FlexBox>
            {/* SignIn Button */}
            <Spacing height="20px" />
            <Button type="submit" loading={isSubmitting} fullWidth>
                회원가입
            </Button>

            <Spacing height="20px" />
            <FlexBox alignItems="center" justifyContent="center" style={{ textAlign: 'center' }} gap="g4">
                <Typography variant="caption" color="grey">
                    가입한 계정이 있으신가요 ?
                </Typography>
                <Link
                    to={paths.signIn}
                    className={clsx(
                        sprinkles({
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }),
                    )}
                    style={{
                        color: vars.colors.grey[700],
                        textDecoration: 'underline',
                    }}
                >
                    <Typography as="span" variant="caption" color="grey">
                        로그인
                    </Typography>
                </Link>
            </FlexBox>
        </FormProvider>
    );
}
