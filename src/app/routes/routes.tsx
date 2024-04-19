import { createHashRouter } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import { Login } from '../pages/Login';
import { Home } from '../pages/Home';

export const router = createHashRouter([
  {
    path: 'auth',
    element: <Login/>
  },
  {
    path: '',
    element: 
    <ProtectedRoute >
      <Home />
    </ProtectedRoute>
  }
]);