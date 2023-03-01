import { createContext, useState } from 'react';

export const SearchContext = createContext();

export default function SearchUserContext({ children }) {
  const [user, setUser] = useState([]);
  return (
    <SearchContext.Provider value={{ user }}>{children}</SearchContext.Provider>
  );
}
