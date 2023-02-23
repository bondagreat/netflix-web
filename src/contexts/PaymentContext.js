import { createContext, useState } from 'react';
export const PaymentContext = createContext();

export default function PaymentContextProvider({ children }) {
  const [plan, setPlan] = useState({});

  // const handleClickPackage = () => {

  //   }

  return (
    <PaymentContext.Provider value={{ plan }}>
      {children}
    </PaymentContext.Provider>
  );
}
