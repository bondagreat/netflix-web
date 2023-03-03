import { useContext } from 'react';
import { SearchUserContext } from '../contexts/SearchUserContext';

export default function useSearch() {
  return useContext(SearchUserContext);
}
