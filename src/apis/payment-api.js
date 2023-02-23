import axios from '../config/axios';

export const sendToken = (input) => axios.post('/payment/token', input);
