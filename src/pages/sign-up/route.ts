import { type RouteObject } from 'react-router-dom';

import { paths } from '~/shared/routes';

export const signUpRoute: RouteObject = {
    path: paths.signUp,
    lazy: async () => {
        const Component = await import('./render').then((module) => module.default);
        return { Component };
    },
};
