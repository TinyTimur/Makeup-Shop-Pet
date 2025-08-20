import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './Styles/index.scss';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { AppProviders } from './ContextProvider/AppProviders.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <AppProviders>
                <App />
            </AppProviders>
        </BrowserRouter>
    </StrictMode>
);
