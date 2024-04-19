import ReactDOM from 'react-dom/client';
import { AppProvider } from './app/core/state/AppContext';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/routes/routes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AppProvider>
    <RouterProvider router={router}/>
  </AppProvider>
);
