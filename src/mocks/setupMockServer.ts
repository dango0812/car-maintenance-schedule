export const setupMockServer = async () => {
    const isMockEnabled = import.meta.env.DEV;
    if (!isMockEnabled) {
        return;
    }

    const { worker } = await import('src/mocks/browser');
    return worker.start({
        onUnhandledRequest: 'error',
    });
};
