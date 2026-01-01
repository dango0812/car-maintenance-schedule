import { useCallback, useState } from 'react';

import { getAuthErrorMessage, resetPassword } from '~/entities/user';
import { paths } from '~/shared/constants/paths';
import { useToast } from '~/shared/hooks/useToast';

export interface ForgotPasswordFormType {
    email: string;
}

export function useForgotPassword() {
    const { success } = useToast();
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleForgotPassword = useCallback(async (data: ForgotPasswordFormType) => {
        setErrorMessage(null);

        try {
            const redirectUrl = `${window.location.origin}${paths.resetPassword}`;
            const { error } = await resetPassword(data.email, redirectUrl);
            if (error) {
                setErrorMessage(getAuthErrorMessage(error));
                return;
            }

            success('비밀번호 재설정 메일을 보냈어요.\n메일함을 확인해 주세요.');
        } catch (error) {
            if (error instanceof Error) {
                setErrorMessage(error.message);
            }
        }
    }, []);

    return {
        errorMessage,
        handleForgotPassword,
    };
}
