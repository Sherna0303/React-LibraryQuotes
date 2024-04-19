import { useContext, useState } from 'react';
import { authService } from '../services/auth.service';
import { AppContext } from '../state/AppContext';

export const useAuth = () => {
  const [error, setError] = useState<string>();
  const { dispatch } = useContext(AppContext);

  const authenticate = (email: string, password: string) => authService({ email: email, password })
    .then((isAuthenticated) => {
      if (isAuthenticated) {
        dispatch({ type: 'USER_LOGGED' });
        
      } else {
        setError('Las credenciales son incorrectas');
      }
    });

  return { authenticate, error };
};