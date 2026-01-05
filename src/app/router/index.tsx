import { createBrowserRouter, Outlet, redirect, RouterProvider } from 'react-router-dom';

import { communityRoute } from '~/pages/community/route';
import { dashboardRoute } from '~/pages/dashboard/route';
import { forgotPasswordRoute } from '~/pages/forgot-password/route';
import { homeRoute } from '~/pages/home/route';
import { page404Route } from '~/pages/page404/route';
import { profileRoute } from '~/pages/profile/route';
import { resetPasswordRoute } from '~/pages/reset-password/route';
import { serviceRoute } from '~/pages/service/route';
import { signInRoute } from '~/pages/sign-in/route';
import { signUpRoute } from '~/pages/sign-up/route';
import { paths } from '~/shared/constants/paths';
import { MainLayout } from '~/widgets/layout/MainLayout';

function ErrorBoundary() {
    return <div>Something went wrong</div>;
}

const router = createBrowserRouter([
    {
        errorElement: <ErrorBoundary />,
        element: <Outlet />,
        children: [
            homeRoute,
            signInRoute,
            signUpRoute,
            forgotPasswordRoute,
            resetPasswordRoute,
            page404Route,
            {
                element: <MainLayout />,
                children: [dashboardRoute, serviceRoute, communityRoute, profileRoute],
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
