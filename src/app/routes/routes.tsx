import { createBrowserRouter } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import { Login } from '../pages/login.page';
import { Register } from '../pages/register.page';
import { ProtectLoggedRoute } from './ProtectLoggedRoute';
import { LayoutAuth } from '../ui/layouts/layout-auth';
import { LayoutMain } from '../ui/layouts/layout-main';
import { SaveCopy } from '../pages/save-copy.page';
import { ListCopies } from '../pages/list-copies.page';
import { BudgetListPage } from '../pages/budget-list.page';

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