import { ReactElement } from 'react';
import { AppProvider } from './core/state/AppContext';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import './global.css';

export const App = (): ReactElement => {
  return (
    <>
      <AppProvider>
        <RouterProvider router={router}/>
      </AppProvider>
    </>
  );
};