import { useCallback, useState } from 'react';

import { getAuthErrorMessage, signIn } from '~/entities/user';

export interface SignInFormType {
    email: string;
    password: string;
}

export function useSignIn() {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleSignIn = useCallback(async (data: SignInFormType) => {
        setErrorMessage(null);

        try {
            const { error } = await signIn(data.email, data.password);
            if (error) {
                setErrorMessage(getAuthErrorMessage(error));
            }
        } catch (error) {
            if (error instanceof Error) {
                setErrorMessage(error.message);
            }
        }
    }, []);

    return {
        errorMessage,
        handleSignIn,
    };
}
