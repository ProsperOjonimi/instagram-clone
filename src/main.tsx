import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ContextProvider } from "./context/languageContext.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ModalContextProvider from "./context/modalContext.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <ModalContextProvider>
          <App />
        </ModalContextProvider>
      </ContextProvider>
    </QueryClientProvider>
  </StrictMode>
);
