export const enableMocking = async () => {
    const isProd = import.meta.env.PROD;
    if (isProd) {
        return;
    }

    const { worker } = await import('./browser');
    return worker.start({
        onUnhandledRequest: 'error',
    });
};
