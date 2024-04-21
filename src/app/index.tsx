import { ReactElement } from 'react';
import { AppProvider } from './core/state/AppContext';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import './ui/styles/global.css';
import './ui/styles/normalize.css';

export const App = (): ReactElement => {
  return (
    <>
      <AppProvider>
        <RouterProvider router={router}/>
      </AppProvider>
    </>
  );
};