import { type RouteObject } from 'react-router-dom';

import { guestOnly } from '~/shared/lib/auth/authGuard';
import { paths } from '~/shared/routes';

export const homeRoute: RouteObject = {
    path: paths.home,
    loader: guestOnly(),
    lazy: async () => {
        const Component = await import('./render').then((module) => module.default);
        return { Component };
    },
};
