import { Dispatch, ReactElement, ReactNode, createContext, useEffect, useReducer } from 'react';
import { verifyToken } from '../services/verifyToken.service';
export const initialState: IState = {
  isUserLogged: false
};

interface IAppContext {
  state: IState;
  dispatch: Dispatch<IAction>;
}
export const AppContext = createContext<IAppContext>({ state: initialState, dispatch: () => null  });

interface IAppProviderProps {
  children: ReactNode;
}

interface IState {
  isUserLogged: boolean;
}

interface IAction {
  type: string;
}

export const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
  case 'USER_LOGGED':
    return { ...state, isUserLogged: true };
  case 'USER_NOT_LOGGED':
    return { ...state, isUserLogged: false };
  default:
    return state;
  }
};

export const AppProvider = ({ children }: IAppProviderProps): ReactElement => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {

    const validateToken = async () => {
      const statusToken = verifyToken();
      
      if (await statusToken) {
        dispatch({ type: 'USER_LOGGED' });
      } else {
        localStorage.removeItem('TOKEN');
        dispatch({ type: 'USER_NOT_LOGGED' });
      } 
    };
  
    validateToken();
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};