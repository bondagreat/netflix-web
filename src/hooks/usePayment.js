import { useContext } from 'react';
import { PaymentContext } from '../contexts/PaymentContext';

export default function usePayment() {
  return useContext(PaymentContext);
}
