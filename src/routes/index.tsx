import { lazy, Suspense } from 'react';
import { Navigate, Outlet, useRoutes } from 'react-router-dom';

import { paths } from 'src/routes/paths';

const DashboardLayout = lazy(() => import('src/components/dashboard/Layout'));
const SplashScreen = lazy(() => import('src/components/SplashScreen'));
const HomePage = lazy(() => import('src/pages/home'));
const DashboardPage = lazy(() => import('src/pages/Dashboard'));
const NotFoundPage = lazy(() => import('src/pages/404'));

export default function Router() {
    return useRoutes([
        {
            element: (
                <Suspense fallback={<SplashScreen />}>
                    <Outlet />
                </Suspense>
            ),
            children: [
                {
                    children: [
                        { path: paths.home, element: <HomePage /> },
                        {
                            path: paths.dashboard,
                            element: (
                                <DashboardLayout>
                                    <Suspense fallback={null}>
                                        <DashboardPage />
                                    </Suspense>
                                </DashboardLayout>
                            ),
                        },
                        { path: paths.page404, element: <NotFoundPage /> },
                        { path: '*', element: <Navigate to={paths.page404} replace /> },
                    ],
                },
            ],
        },
    ]);
}
