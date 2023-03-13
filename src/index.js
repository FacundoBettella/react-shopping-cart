import React from 'react';
import ReactDOM from 'react-dom/client';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import App from './App';
import { AuthProvider } from './context/authContext';
import { CarritoProvider } from './context/carritoContext';
import { ThemeProvider } from './context/themeContext';
import './index.css';

/* After React v18.0.0 */
var container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <ThemeProvider>
    <AuthProvider>
      <CarritoProvider>
        <App />
      </CarritoProvider>
    </AuthProvider>
  </ThemeProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
