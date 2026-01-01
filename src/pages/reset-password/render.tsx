import { useResetPassword } from '~/features/auth/reset-password/model/useResetPassword';
import { ResetPasswordForm } from '~/features/auth/reset-password/ui/ResetPasswordForm';
import Asset from '~/shared/ui/Asset';
import { FlexBox } from '~/shared/ui/FlexBox';
import { Spacing } from '~/shared/ui/Spacing';
import { Typography } from '~/shared/ui/Typography';
import { CenterWrapper } from '~/widgets/auth';

export default function ResetPasswordPage() {
    const { errorMessage, handleResetPassword } = useResetPassword();

    return (
        <CenterWrapper>
            <FlexBox direction="column" alignItems="center" justifyContent="center" gap="g20">
                <Asset.Image name="lock.webp" width={64} height={60} />

                <FlexBox direction="column" gap="g8">
                    <Typography as="h6" fontSize="s22" fontWeight="bold">
                        {'새로운 비밀번호로 바꿀게요'}
                    </Typography>
                    <Typography variant="body" color="grey" whiteSpace="pre-wrap">
                        {'비밀번호 변경 후 기존 비밀번호는 사용할 수 없어요.\n비밀번호는 안전하게 암호화되어 저장돼요.'}
                    </Typography>
                </FlexBox>
            </FlexBox>

            <Spacing height="30px" />
            <ResetPasswordForm onSubmit={handleResetPassword} errorMessage={errorMessage} />
        </CenterWrapper>
    );
}
