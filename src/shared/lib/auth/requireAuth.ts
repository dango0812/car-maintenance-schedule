import { redirect } from 'react-router-dom';

import { supabase } from '~/shared/lib/supabaseClient';
import { paths } from '~/shared/routes';

export const requireAuth = async () => {
    const { data } = await supabase.auth.getSession();

    if (!data.session) {
        throw redirect(paths.signIn);
    }

    return null;
};
