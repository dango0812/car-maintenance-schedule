import { useForgotPassword } from '~/features/auth/forgot-password/model/useForgotPassword';
import { ForgotPasswordForm } from '~/features/auth/forgot-password/ui/ForgotPasswordForm';
import { FlexBox } from '~/shared/ui/FlexBox';
import { Typography } from '~/shared/ui/Typography';
import { CenterWrapper } from '~/widgets/auth';

export default function ForgotPasswordPage() {
    const { errorMessage, handleForgotPassword } = useForgotPassword();

    return (
        <CenterWrapper>
            <FlexBox direction="column" gap="g20">
                <Typography as="h6" fontSize="s22" fontWeight="bold" whiteSpace="pre-wrap">
                    {'계정의 비밀번호를 찾으려면\n이메일 인증을 해주세요'}
                </Typography>
                <ForgotPasswordForm onSubmit={handleForgotPassword} errorMessage={errorMessage} />
            </FlexBox>
        </CenterWrapper>
    );
}
