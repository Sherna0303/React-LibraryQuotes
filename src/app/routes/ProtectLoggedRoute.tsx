import { ReactNode, useContext } from 'react';
import { AppContext } from '../core/state/AppContext';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
    children: ReactNode;
}
  
export const ProtectLoggedRoute = ({ children }: ProtectedRouteProps) => {
  const { state } = useContext(AppContext);

  if (state.isUserLogged) {
    return <Navigate to='/'/>;
  } 

  return children;
};