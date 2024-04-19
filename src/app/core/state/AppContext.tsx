import { Dispatch, ReactElement, ReactNode, createContext, useEffect, useReducer } from 'react';

export const initialState: IState = {
  isUserLogged: localStorage.getItem('isUserLogged') === 'true',
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
  default:
    return state;
  }
};

export const AppProvider = ({ children }: IAppProviderProps): ReactElement => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem('isUserLogged', state.isUserLogged.toString());
  }, [state.isUserLogged]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};