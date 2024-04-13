import React, {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";

export interface ContextOptions {
  Theme: "dark" | "light";
}

interface OptionContextProps {
  setOptions: Dispatch<ContextOptions>;
  options: ContextOptions;
}
const OptionContext = createContext<OptionContextProps | undefined>(undefined);

const INITIALSTATE: ContextOptions = {
  Theme: "light",
};

interface ProviderProps {
  children: ReactNode;
}

const OptionContextProvider = ({ children }: ProviderProps) => {
  const [options, setOptions] = useState(INITIALSTATE);
  return (
    <OptionContext.Provider value={{ options, setOptions }}>
      {children}
    </OptionContext.Provider>
  );
};

export default OptionContextProvider;

export const useOptions = (): OptionContextProps => {
  const context = useContext(OptionContext);
  if (context) return null;
  return context;
};
