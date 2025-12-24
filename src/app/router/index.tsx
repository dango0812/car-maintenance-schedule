import { createBrowserRouter, Outlet, redirect, RouterProvider } from 'react-router-dom';

import { DashboardRoute } from '~/pages/dashboard/route';
import { HomeRoute } from '~/pages/home/route';
import { page404Route } from '~/pages/page404/route';
import { paths } from '~/shared/routes';

function ErrorBoundary() {
    return <div>Something went wrong</div>;
}

const router = createBrowserRouter([
    {
        errorElement: <ErrorBoundary />,
        children: [
            {
                children: [HomeRoute, DashboardRoute],
            },
            {
                element: <Outlet />,
                children: [page404Route],
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
