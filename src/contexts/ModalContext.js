import { createContext, useState } from 'react';

export const ModalContext = createContext();

export default function ModalContextProvider({ children }) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <ModalContext.Provider value={{ openModal }}>
      {children}
    </ModalContext.Provider>
  );
}
