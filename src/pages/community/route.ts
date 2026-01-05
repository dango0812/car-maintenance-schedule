import { type RouteObject } from 'react-router-dom';

import { paths } from '~/shared/constants/paths';
import { requireAuth } from '~/shared/lib/auth/authGuard';

export const communityRoute: RouteObject = {
    path: paths.community,
    loader: requireAuth(),
    lazy: async () => {
        const Component = await import('./render').then((module) => module.default);
        return { Component };
    },
};
