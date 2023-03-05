import { createContext, useState } from 'react';

export const SearchUserContext = createContext();

export default function SearchUserContextProvider({ children }) {
  const [user, setUser] = useState([]);
  return (
    <SearchUserContext.Provider value={{ user }}>
      {children}
    </SearchUserContext.Provider>
  );
}
