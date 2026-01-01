import { type RouteObject } from 'react-router-dom';

import { paths } from '~/shared/constants/paths';
import { guestOnly } from '~/shared/lib/auth/authGuard';

export const forgotPasswordRoute: RouteObject = {
    path: paths.forgotPassword,
    loader: guestOnly(),
    lazy: async () => {
        const Component = await import('./render').then((module) => module.default);
        return { Component };
    },
};
