import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { OverlayProvider } from 'overlay-kit';

import { AppRouter } from './router';

import { queryClient } from '~/shared/queryClient';

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <OverlayProvider>
                <AppRouter />
            </OverlayProvider>
            <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-right" />
        </QueryClientProvider>
    );
}
