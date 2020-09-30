import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from "react";

type ContextState = {
  creditCards?: CreditCard[];
  customer?: Customer;
};

const StoreContext = createContext<{
  state?: ContextState;
  setState?: React.Dispatch<React.SetStateAction<ContextState>>;
}>({});

export const useStoreContext = () => useContext(StoreContext);

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState({});

  const value = useMemo(
    () => ({
      state,
      setState,
    }),
    [setState, state]
  );

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
