import { createHashRouter } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import { Login } from '../pages/Login';
import { Home } from '../pages/Home';
import { Register } from '../pages/Register';
import { ProtectLoggedRoute } from './ProtectLoggedRoute';
import { LayoutAuth } from '../ui/layouts/LayoutAuth';

export const router = createHashRouter([

  {
    path: '',
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
        path: '/register',
        element: 
        <ProtectLoggedRoute >
          <Register/>
        </ProtectLoggedRoute>
        
      },
    ]
  },
  {
    path: '',
    element: 
    <ProtectedRoute >
      <Home />
    </ProtectedRoute>
  }
]);