import axios from '../config/axios';

export const fetchPackage = () => axios.get('/package/getAllPackage');
