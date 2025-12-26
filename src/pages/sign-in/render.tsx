import * as styles from './style.css';

import { SignInForm, useSignIn } from '~/features/auth';
import { Card } from '~/shared/ui/Card';
import { FlexBox } from '~/shared/ui/FlexBox';
import { Spacing } from '~/shared/ui/Spacing';
import { Typography } from '~/shared/ui/Typography';

export default function SignInPage() {
    const { errorMessage, handleSignIn } = useSignIn();

    return (
        <FlexBox direction="column" alignItems="flex-start" justifyContent="flex-start" className={styles.RootStyle}>
            <div className={styles.WrapperStyle}>
                <Card variant="solid" color="white">
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
                </Card>
            </div>
        </FlexBox>
    );
}
