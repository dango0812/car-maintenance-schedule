import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { OverlayProvider } from 'overlay-kit';

import { AuthProvider } from './providers';
import { AppRouter } from './router';

import '~/shared/styles/globals.css';

import { queryClient } from '~/shared/lib/queryClient';

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <OverlayProvider>
                    <AppRouter />
                </OverlayProvider>
            </AuthProvider>

            <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-right" />
        </QueryClientProvider>
    );
}
