import { supabase } from '~/shared/lib/supabaseClient';

export const signIn = async (email: string, password: string) => {
    return supabase.auth.signInWithPassword({
        email,
        password,
    });
};

export const signUp = async (email: string, password: string) => {
    return supabase.auth.signUp({
        email,
        password,
    });
};

export const resendSignUpEmail = async (email: string) => {
    return supabase.auth.resend({
        type: 'signup',
        email,
    });
};

export const signOut = async () => {
    return supabase.auth.signOut();
};
