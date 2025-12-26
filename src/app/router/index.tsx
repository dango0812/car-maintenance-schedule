import { createBrowserRouter, Outlet, redirect, RouterProvider } from 'react-router-dom';

import { dashboardRoute } from '~/pages/dashboard/route';
import { homeRoute } from '~/pages/home/route';
import { page404Route } from '~/pages/page404/route';
import { signInRoute } from '~/pages/sign-in/route';
import { signUpRoute } from '~/pages/sign-up/route';
import { paths } from '~/shared/routes';

function ErrorBoundary() {
    return <div>Something went wrong</div>;
}

const router = createBrowserRouter([
    {
        errorElement: <ErrorBoundary />,
        element: <Outlet />,
        children: [
            {
                children: [homeRoute, signInRoute, signUpRoute, dashboardRoute, page404Route],
            },
            {
                path: '*',
                loader: async () => redirect(paths.page404),
            },
        ],
    },
]);

export function AppRouter() {
    return <RouterProvider router={router} />;
}
