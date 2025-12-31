import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { OverlayProvider } from 'overlay-kit';

import { AuthProvider, MotionProvider, ToastProvider } from './providers';
import { AppRouter } from './router';

import '~/shared/styles/globals.css';

import { queryClient } from '~/shared/lib/queryClient';

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <MotionProvider>
                    <ToastProvider>
                        <OverlayProvider>
                            <AppRouter />
                        </OverlayProvider>
                    </ToastProvider>
                </MotionProvider>
            </AuthProvider>

            <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-right" />
        </QueryClientProvider>
    );
}
