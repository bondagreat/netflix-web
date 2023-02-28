import { createContext, useState } from 'react';
export const RegisterContext = createContext();

export default function RegisterContextProvider({ children }) {
  const [plan, setPlan] = useState({});
  const [inputEmail, setInputEmail] = useState({ email: '' });

  const changeInputEmail = (input) => {
    setInputEmail(input);
  };

  // const handleClickPackage = () => {

  //   }

  return (
    <RegisterContext.Provider value={{ plan, inputEmail, changeInputEmail }}>
      {children}
    </RegisterContext.Provider>
  );
}
