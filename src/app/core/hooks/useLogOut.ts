import { useContext } from 'react';
import { AppContext } from '../state/AppContext';

export const useLogOut = () => {
  const { dispatch } = useContext(AppContext);
  
  const logOut = () => {
    dispatch({ type: 'USER_NOT_LOGGED' });
    localStorage.removeItem('TOKEN');
  };
  
  return logOut;
};