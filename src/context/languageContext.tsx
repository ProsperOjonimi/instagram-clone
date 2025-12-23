import { createContext, useContext, useState } from "react";

type languageContextType = {
  language: string;
  setLanguage: (prev: string) => void;
};
const languageContext = createContext<languageContextType | null>(null);

export function ContextProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<string>("en");

  return (
    <languageContext.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      {children}
    </languageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(languageContext);

  if (!ctx) throw new Error("Outside context provider");

  return ctx;
}
