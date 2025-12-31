import { redirect } from 'react-router-dom';

import { supabase } from '~/shared/lib/supabaseClient';
import { paths } from '~/shared/routes';

/**
 * 로그인한 사용자만 접근 가능 (세션 존재하지 않을 경우, 로그인 페이지 이동)
 */
export const requireAuth =
    (redirectTo: string = paths.signIn) =>
    async () => {
        const {
            data: { session },
        } = await supabase.auth.getSession();

        if (!session) return redirect(redirectTo);
        return null;
    };

/**
 * 로그인하지 않은 사용자만 접근 가능 (세션 존재 시, 대시보드 이동)
 */
export const guestOnly =
    (redirectTo: string = paths.dashboard) =>
    async () => {
        const {
            data: { session },
        } = await supabase.auth.getSession();

        if (session) return redirect(redirectTo);
        return null;
    };
