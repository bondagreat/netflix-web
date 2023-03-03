import axios from '../config/axios';

export const getAllMovie = () => axios.get('/movie/getAllMovie');
