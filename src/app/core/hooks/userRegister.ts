import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../state/AppContext';
import { registerService } from '../services/register.service';

export const useRegister = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string>();
  const { dispatch } = useContext(AppContext);
  
  const register = (name: string, email: string, password: string) => {
    registerService({ name, email, password })
      .then((isAuthenticated) => {
        if (isAuthenticated) {
          dispatch({ type: 'USER_LOGGED' });
          navigate('/');
        } else {
          setError('No se pudo registrar');
        }
      });
  };
  
  return { register, error };
};