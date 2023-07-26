import React, { createContext, useReducer, useContext, ReactNode } from 'react';

// Define el estado y las acciones
interface State {
  itemOpen: number;
  // Define tu estado aquí...
}

interface Action {
  type: string;
  payload: number;
  // Define tus acciones aquí...
}

// Define el estado inicial
const initialState: State = {
  itemOpen: 1,
  // Inicializa tu estado aquí...
};

// Crea el reducer

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    // Define tus acciones aquí...
    case 'change':
      return { ...state, itemOpen: action.payload };
    default:
      return state;
  }
};

// Crea el Contexto
interface ContextProps {
  state: State;
  dispatch: React.Dispatch<Action>;
}

const StateContext = createContext<ContextProps>({
  state: initialState,
  dispatch: () => null,
});

interface StateProviderProps {
  children: ReactNode;
}

export const StateProvider: React.FC<StateProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

// Crea un hook personalizado para usar el estado global
export function useStateValue() {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error('useStateValue debe usarse dentro de un StateProvider');
  }
  return context;
}
