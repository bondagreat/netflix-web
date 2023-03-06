import axios from '../config/axios';

export const getAllUser = () => axios.get('/admin/getAllUser');
