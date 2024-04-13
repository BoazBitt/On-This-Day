import React from "react";
import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import Container from "./components/Layout/Container/Container";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import OptionContextProvider from "./Context";

const queryClient = new QueryClient();

function App() {
  return (
    <OptionContextProvider>
      <QueryClientProvider client={queryClient}>
        <Container>
          <MainPage />
        </Container>
      </QueryClientProvider>
    </OptionContextProvider>
  );
}

export default App;
