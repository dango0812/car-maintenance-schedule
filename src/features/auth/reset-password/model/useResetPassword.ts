import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getAuthErrorMessage, updateUser } from '~/entities/user';
import { paths } from '~/shared/constants/paths';
import { useToast } from '~/shared/hooks/useToast';

export interface ResetPasswordFormType {
    newPassword: string;
}

export function useResetPassword() {
    const navigate = useNavigate();
    const { success } = useToast();
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleResetPassword = useCallback(
        async (data: ResetPasswordFormType) => {
            setErrorMessage(null);

            try {
                const { error } = await updateUser({
                    password: data.newPassword,
                });

                if (error) {
                    setErrorMessage(getAuthErrorMessage(error));
                    return;
                }

                success('계정 비밀번호가 바뀌었어요.');
                navigate(paths.dashboard);
            } catch (error) {
                if (error instanceof Error) {
                    setErrorMessage(error.message);
                }
            }
        },
        [navigate, success],
    );

    return {
        errorMessage,
        handleResetPassword,
    };
}
