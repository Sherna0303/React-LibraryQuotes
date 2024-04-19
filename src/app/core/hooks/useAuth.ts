import { useContext, useState } from 'react';
import { authService } from '../services/auth.service';
import { AppContext } from '../state/AppContext';

export const useAuth = () => {
  const [error, setError] = useState<string>();
  const { dispatch } = useContext(AppContext);

  const authenticate = (userName: string, password: string) => authService({ email: userName, password })
    .then((isAuthenticated) => {
      if (isAuthenticated) {
        dispatch({ type: 'USER_LOGGED' });
        
      } else {
        setError('Las credenciales son incorrectas');
      }
    });

  return { authenticate, error };
};