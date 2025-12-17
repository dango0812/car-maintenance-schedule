import { StrictMode } from 'react';
import { OverlayProvider } from 'overlay-kit';
import ReactDOM from 'react-dom/client';

import { setupMockServer } from 'src/mocks/setupMockServer';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

setupMockServer().then(() => {
    root.render(
        <StrictMode>
            <OverlayProvider>
                <App />
            </OverlayProvider>
        </StrictMode>,
    );
});
