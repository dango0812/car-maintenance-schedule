import { useEffect, useMemo, useState } from 'react';
import { debounce } from 'es-toolkit';

import { getAuthErrorMessage, signIn } from '~/entities/user';

export interface SignInFormType {
    email: string;
    password: string;
}

export function useSignIn() {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleSignIn = useMemo(
        () =>
            debounce(async (data: SignInFormType) => {
                setErrorMessage(null);

                const { error } = await signIn(data.email, data.password);

                if (error) {
                    setErrorMessage(getAuthErrorMessage(error));
                }
            }, 1000),
        [],
    );

    useEffect(() => {
        return () => {
            handleSignIn.cancel?.();
        };
    }, [handleSignIn]);

    return {
        errorMessage,
        handleSignIn,
    };
}
