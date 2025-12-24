import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import App from '~/app';
// import { enableMocking } from '~/app/msw';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <StrictMode>
        <App />
    </StrictMode>,
);
/*
enableMocking().then(() => {
    root.render(
        <StrictMode>
            <App />
        </StrictMode>,
    );
});
*/
