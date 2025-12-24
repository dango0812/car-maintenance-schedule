import { type RouteObject } from 'react-router-dom';

import { paths } from '~/shared/routes';

export const HomeRoute: RouteObject = {
    path: paths.home,
    lazy: async () => {
        const Component = await import('./render').then((module) => module.default);
        return { Component };
    },
};
