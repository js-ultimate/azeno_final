import { createRoot } from 'react-dom/client';
import React, { StrictMode } from 'react';

import App from './components/App/App.jsx';

const root = createRoot(document.getElementById('app'));
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
