import axios from '../config/axios';

export const getAllUser = () => axios.get('/admin/getAllUser');
export const getAllMovie = () => axios.get('/admin/getAllMovie');
