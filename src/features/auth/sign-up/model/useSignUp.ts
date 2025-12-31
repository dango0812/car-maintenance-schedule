import { useCallback, useState } from 'react';

import { getAuthErrorMessage, signUp } from '~/entities/user';

export interface SignUpFormType {
    email: string;
    password: string;
    confirmPassword: string;
}

export type Step = 'form' | 'verify';

export function useSignUp() {
    const [email, setEmail] = useState('');
    const [step, setStep] = useState<Step>('form');
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleSignUp = useCallback(async (data: SignUpFormType) => {
        setErrorMessage(null);

        const { data: result, error } = await signUp(data.email, data.password);

        if (error) {
            setErrorMessage(getAuthErrorMessage(error));
            return;
        }

        const user = result?.user;
        const isEmailVerified = user?.email_confirmed_at;
        if (!isEmailVerified) {
            setEmail(data.email);
            setStep('verify');
            return;
        }
    }, []);

    return { email, step, errorMessage, handleSignUp };
}
