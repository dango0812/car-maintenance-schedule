import { lazy, Suspense } from 'react';
import SplashScreen from 'components/SplashScreen';
import { Navigate, Outlet, useRoutes } from 'react-router-dom';

import { paths } from './paths';

const HomePage = lazy(() => import('pages/home'));
const NotFoundPage = lazy(() => import('pages/404'));

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
                    path: paths.home,
                    element: <HomePage />,
                },
                {
                    path: paths.page404,
                    element: <NotFoundPage />,
                },
                {
                    path: '*',
                    element: <Navigate to={paths.page404} replace />,
                },
            ],
        },
    ]);
}
