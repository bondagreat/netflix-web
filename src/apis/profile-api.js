import axios from '../config/axios';

export const getProfile = (id) => axios.get(`/profile/getProfile/${id}`);
export const addProfile = (input) => axios.post('/profile/addProfile', input);
export const editProfile = (input) =>
  axios.patch('/profile/editProfile', input);
export const deleteProfile = (id) =>
  axios.delete(`/profile/deleteProfile/${id}`);
export const editPin = (input) => axios.patch('/profile/editPin', input);
export const deletePin = (input) => axios.patch('/profile/deletePin', input);
