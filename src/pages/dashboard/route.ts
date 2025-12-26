import { type RouteObject } from 'react-router-dom';

import { requireAuth } from '~/shared/lib/auth/requireAuth';
import { paths } from '~/shared/routes';

export const dashboardRoute: RouteObject = {
    path: paths.dashboard,
    loader: requireAuth,
    lazy: async () => {
        const Component = await import('./render').then((module) => module.default);
        return { Component };
    },
};
