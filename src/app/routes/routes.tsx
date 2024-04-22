import { createBrowserRouter } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { ProtectLoggedRoute } from './ProtectLoggedRoute';
import { LayoutAuth } from '../ui/layouts/LayoutAuth';
import { LayoutMain } from '../ui/layouts/LayoutMain';
import { SaveCopy } from '../pages/SaveCopy';
import { ListCopies } from '../pages/ListCopies';
import { BudgetListPage } from '../pages/BudgetListPage';

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
        Component: SaveCopy
      },
      {
        path: '/funtion1',
        Component: SaveCopy
      },
      {
        path: '/funtion2',
        Component: ListCopies
      },
      {
        path: '/funtion3',
        Component: BudgetListPage
      },
    ]
  },
]);