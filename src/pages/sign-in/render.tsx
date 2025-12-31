import { SignInForm, useSignIn } from '~/features/auth/sign-in';
import { FlexBox } from '~/shared/ui/FlexBox';
import { Spacing } from '~/shared/ui/Spacing';
import { Typography } from '~/shared/ui/Typography';
import { CenterWrapper } from '~/widgets/auth';

export default function SignInPage() {
    const { errorMessage, handleSignIn } = useSignIn();

    return (
        <CenterWrapper>
            <FlexBox direction="column" gap="g4">
                <Typography as="h5" variant="h5">
                    로그인
                </Typography>
                <Typography variant="body" color="grey">
                    오늘도 안전운전 하세요 🚙
                </Typography>
            </FlexBox>
            <Spacing height="30px" />

            <SignInForm onSubmit={handleSignIn} errorMessage={errorMessage} />
        </CenterWrapper>
    );
}
