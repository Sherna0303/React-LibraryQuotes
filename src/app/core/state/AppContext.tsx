import { ReactElement, ReactNode, createContext, useReducer } from 'react';

export const initialState: IState = {
  isUserLogged: false,
};
interface IAppContext {
  state: IState;
  dispatch: any;
}
export const AppContext = createContext<IAppContext>({ state: initialState, dispatch: null });

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

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};