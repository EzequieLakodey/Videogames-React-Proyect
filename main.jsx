import { createRoot } from 'react-dom/client';
import App from './src/App';
import './src/main.scss';

// Auth0
import { Auth0Provider } from '@auth0/auth0-react';

/* Imports */
const root = createRoot(document.getElementById('app'));

const authDomain = import.meta.env.VITE_AUTH_DOMAIN;
const authClient = import.meta.env.VITE_AUTH_CLIENT;

root.render(
    <Auth0Provider
        domain={authDomain}
        clientId={authClient}
        authorizationParams={{
            redirect_uri: window.location.origin,
        }}>
        <App />
    </Auth0Provider>
);
