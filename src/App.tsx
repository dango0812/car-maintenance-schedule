import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter } from 'react-router-dom';

import Router from 'src/routes';

import 'src/styles/globals.css';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
        },
    },
});

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-right" />
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </QueryClientProvider>
    );
}
