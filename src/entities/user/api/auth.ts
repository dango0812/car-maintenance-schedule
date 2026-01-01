import { type UserAttributes } from '@supabase/supabase-js';

import { paths } from '~/shared/constants/paths';
import { supabase } from '~/shared/lib/supabaseClient';

export const signIn = (email: string, password: string) => {
    return supabase.auth.signInWithPassword({
        email,
        password,
    });
};

export const signUp = (email: string, password: string) => {
    return supabase.auth.signUp({
        email,
        password,
    });
};

export const resendSignUpEmail = (email: string) => {
    return supabase.auth.resend({
        type: 'signup',
        email,
    });
};

export const resetPassword = (email: string) => {
    return supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}${paths.resetPassword}`,
    });
};

export const updateUser = (data: UserAttributes) => {
    return supabase.auth.updateUser(data);
};

export const signOut = () => {
    return supabase.auth.signOut();
};
