import React, { ReactNode } from "react";
import classes from "./App.module.scss";
import MainPage from "./components/MainPage/MainPage";
import Container from "./components/Layout/Container/Container";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import OptionContextProvider, { useOptions } from "./Context";

const queryClient = new QueryClient();
interface ThemeProps {
  children: ReactNode;
}

const ThemeState = ({ children }: ThemeProps) => {
  const { options } = useOptions();
  const theme = options?.Theme;
  const themeClass = theme === "light" ? classes.__light : classes.__dark;

  return <div className={themeClass}>{children}</div>;
};

function App() {
  return (
    <OptionContextProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeState>
          <Container>
            <MainPage />
          </Container>
        </ThemeState>
      </QueryClientProvider>
    </OptionContextProvider>
  );
}

export default App;
