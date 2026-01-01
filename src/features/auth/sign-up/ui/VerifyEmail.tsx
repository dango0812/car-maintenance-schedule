import { useEffect, useRef, useState } from 'react';
import { debounce } from 'es-toolkit';
import { useNavigate } from 'react-router-dom';

import { getAuthErrorMessage, resendSignUpEmail, useUserStore } from '~/entities/user';
import { paths } from '~/shared/constants/paths';
import { useToast } from '~/shared/hooks/useToast';
import { supabase } from '~/shared/lib/supabaseClient';
import Asset from '~/shared/ui/Asset';
import { Button } from '~/shared/ui/Button';
import { FlexBox } from '~/shared/ui/FlexBox';
import { If } from '~/shared/ui/If';
import { Typography } from '~/shared/ui/Typography';

interface VerifyEmailProps {
    email: string;
}

export default function VerifyEmail({ email }: VerifyEmailProps) {
    const navigate = useNavigate();
    const toast = useToast();

    const timerRef = useRef<ReturnType<typeof setTimeout>>(null);
    const [showResend, setShowResend] = useState(false);
    const setUser = useUserStore((state) => state.setUser);

    const handleResendEmail = debounce((email: string) => {
        resendSignUpEmail(email)
            .then(({ error }) => {
                if (error) {
                    toast.error(getAuthErrorMessage(error));
                    return;
                }

                toast.success('인증 메일을 보냈어요.\n메일함을 확인해 주세요.');
            })
            .catch((error) => console.log(error));
    }, 1000);

    const startTimer = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        setShowResend(false);

        // 15초 후 재전송 버튼 표시
        timerRef.current = setTimeout(() => {
            setShowResend(true);
        }, 15000);
    };

    useEffect(() => {
        startTimer();

        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
                timerRef.current = null;
            }
        };
    }, []);

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
        <FlexBox direction="column" gap="g30">
            <FlexBox direction="column" gap="g10">
                <Typography as="span" variant="title" fontWeight="bold" color="blue">
                    계정 확인
                </Typography>
                <Typography as="h6" fontSize="s22" fontWeight="bold" whiteSpace="pre-wrap">
                    {'인증 메일을 보냈어요\n메일함을 확인하여 완료해 주세요'}
                </Typography>
            </FlexBox>

            <FlexBox direction="column" alignItems="center" justifyContent="center">
                <Asset.Lottie name="email-successfully-sent" width={160} height={160} />

                <If condition={showResend}>
                    <FlexBox alignItems="center" justifyContent="center" gap="g10">
                        <Typography variant="caption" color="grey">
                            메일을 받지 못하셨나요?
                        </Typography>
                        <Button variant="text" color="grey" onClick={() => handleResendEmail(email)}>
                            재전송
                        </Button>
                    </FlexBox>
                </If>
            </FlexBox>
        </FlexBox>
    );
}
