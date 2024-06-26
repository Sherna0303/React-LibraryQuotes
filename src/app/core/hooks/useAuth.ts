import { useContext, useState } from 'react';
import { authService } from '../services/auth.service';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../state/AppContext';

export const useAuth = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string>();
  const { dispatch } = useContext(AppContext);

  const authenticate = (email: string, password: string) => authService({ email, password })
    .then((isAuthenticated) => {
      if (isAuthenticated) {
        dispatch({ type: 'USER_LOGGED' });
        navigate('/');
      } else {
        setError('The credentials are incorrect');
      }
    });
  return { authenticate, error };
};