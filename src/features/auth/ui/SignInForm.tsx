import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { type SignInFormType } from '../model/useSignIn';

import * as styles from './style.css';

import { paths } from '~/shared/routes';
import { Button } from '~/shared/ui/Button';
import { FlexBox } from '~/shared/ui/FlexBox';
import { If } from '~/shared/ui/If';
import { FormProvider, RHFInput } from '~/shared/ui/RHF';
import { Spacing } from '~/shared/ui/Spacing';
import { Typography } from '~/shared/ui/Typography';

interface Props {
    onSubmit: (data: SignInFormType) => void;
    errorMessage: string | null;
}

export function SignInForm({ onSubmit, errorMessage }: Props) {
    const methods = useForm<SignInFormType>({
        defaultValues: { email: '', password: '' },
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

                <If condition={Boolean(errorMessage)}>
                    <Typography variant="caption" color="red">
                        {errorMessage}
                    </Typography>
                </If>
            </FlexBox>

            {/* SignUp & Forgot password */}
            <Spacing height="10px" />
            <FlexBox justifyContent="flex-end" style={{ width: '100%' }}>
                <Link to={paths.signUp}>
                    <Typography variant="caption" color="grey" fontWeight="light">
                        회원가입
                    </Typography>
                </Link>
                <span className={styles.Divider} aria-hidden />

                <Link to="#">
                    <Typography variant="caption" color="grey" fontWeight="light">
                        비밀번호 찾기
                    </Typography>
                </Link>
            </FlexBox>

            {/* SignIn Button */}
            <Spacing height="20px" />
            <Button type="submit" loading={isSubmitting} fullWidth>
                로그인
            </Button>
        </FormProvider>
    );
}
