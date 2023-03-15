import axios from '../config/axios';

export const register = (input) => axios.post('/auth/register', input);
export const login = (input) => axios.post('/auth/login', input);
export const getMe = () => axios.get('/auth/me');
export const changeEmail = (input) => axios.patch('/auth/changeEmail', input);
export const changePassword = (input) =>
  axios.patch('/auth/changePassword', input);
export const changePhone = (input) => axios.patch('/auth/changePhone', input);

export const startEmail = (input) => axios.post('/auth/startEmail', input);
