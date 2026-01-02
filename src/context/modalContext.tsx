import { createContext, useContext, useState } from "react";

type ModalContextType = {
  showModal: boolean;
  setShowModal: (modal: boolean) => void;
};
const modalContext = createContext<ModalContextType | null>(null);

export default function ModalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <modalContext.Provider
      value={{
        showModal,
        setShowModal,
      }}
    >
      {children}
    </modalContext.Provider>
  );
}

export function useModalContext() {
  const ctx = useContext(modalContext);
  if (!ctx) throw new Error("Outside of the context provider");

  return ctx;
}
