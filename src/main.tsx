import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppProvider } from './app/core/state/AppContext';
import { Login } from './app/pages/Login';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AppProvider>
    <React.StrictMode>
      <Login />
    </React.StrictMode>
  </AppProvider>
);
