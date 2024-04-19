import { useContext, useState } from 'react';
import { authService } from '../services/auth.service';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../state/AppContext';

export const useAuth = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string>();
  const { dispatch } = useContext(AppContext);

  const authenticate = (userName: string, password: string) => {
    authService({ userName, password })
      .then((isAuthenticated) => {
        if (isAuthenticated) {
          dispatch({ type: 'USER_LOGGED' });
          navigate('/');
        } else {
          setError('Las credenciales son incorrectas');
        }
      });
  };

  return { authenticate, error };
};