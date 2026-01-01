import { type RouteObject } from 'react-router-dom';

import { paths } from '~/shared/constants/paths';
import { guestOnly } from '~/shared/lib/auth/authGuard';

export const homeRoute: RouteObject = {
    path: paths.home,
    loader: guestOnly(),
    lazy: async () => {
        const Component = await import('./render').then((module) => module.default);
        return { Component };
    },
};
