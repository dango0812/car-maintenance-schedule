import { lazy } from 'react';

import { SignUpForm, useSignUp } from '~/features/auth/sign-up';
import { FlexBox } from '~/shared/ui/FlexBox';
import { If } from '~/shared/ui/If';
import { Spacing } from '~/shared/ui/Spacing';
import { Typography } from '~/shared/ui/Typography';
import { CenterWrapper } from '~/widgets/auth';

const VerifyEmail = lazy(() => import('~/features/auth/sign-up/ui/VerifyEmail'));

export default function SignUpPage() {
    const { email, step, errorMessage, handleSignUp } = useSignUp();

    return (
        <CenterWrapper>
            <If condition={step === 'form'}>
                <FlexBox direction="column" gap="g4">
                    <Typography as="h5" variant="h5">
                        회원가입
                    </Typography>
                    <Typography variant="body" color="grey">
                        소중한 내 차, 이제 같이 관리해 봐요 👋
                    </Typography>
                </FlexBox>
                <Spacing height="30px" />
                <SignUpForm onSubmit={handleSignUp} errorMessage={errorMessage} />
            </If>

            <If condition={step === 'verify'}>
                <VerifyEmail email={email} />
            </If>
        </CenterWrapper>
    );
}
