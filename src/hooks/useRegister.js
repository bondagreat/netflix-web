import { useContext } from 'react';
import { RegisterContext } from '../contexts/RegisterContext';

export default function useRegister() {
  return useContext(RegisterContext);
}
