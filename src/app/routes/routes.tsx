import { createBrowserRouter } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import { Login } from '../pages/Login';
import { Home } from '../pages/Home';
import { Register } from '../pages/Register';
import { ProtectLoggedRoute } from './ProtectLoggedRoute';
import { LayoutAuth } from '../ui/layouts/LayoutAuth';
import { LayoutMain } from '../ui/layouts/LayoutMain';
import { SaveCopy } from '../pages/SaveCopy';
import { CalculateList } from '../pages/CalculateList';

export const router = createBrowserRouter([

  {
    Component: LayoutAuth,
    children: [
      {
        path: 'auth',
        element: 
        <ProtectLoggedRoute >
          <Login />
        </ProtectLoggedRoute>
    
      },
      {
        path: 'register',
        element: 
        <ProtectLoggedRoute >
          <Register/>
        </ProtectLoggedRoute>
      },
    ]
  },
  {
    element: <ProtectedRoute ><LayoutMain/></ProtectedRoute>,
    children: [
      {
        path: '',
        Component: Home
      },
      {
        path: '/funtion1',
        Component: SaveCopy
      },
      {
        path: '/funtion2',
        Component: CalculateList
      },
      {
        path: '/funtion3',
        element: <h1>funcion3</h1>
      },
    ]
  },
]);