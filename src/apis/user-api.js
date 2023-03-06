import axios from '../config/axios';

export const ChangePassword = (input) =>
  axios.patch('/auth/changePassword', input);
