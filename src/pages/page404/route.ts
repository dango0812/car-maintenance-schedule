import { type RouteObject } from 'react-router-dom';

import { paths } from '~/shared/routes';

export const page404Route: RouteObject = {
    path: paths.page404,
    lazy: async () => {
        const Component = await import('./render').then((module) => module.default);
        return { Component };
    },
};
