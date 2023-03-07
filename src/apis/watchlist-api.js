import axios from '../config/axios';

export const getWatchlist = (profileId) =>
  axios.get(`/watchlist/getWatchlist/${profileId}`);

export const addWatchlist = (input) =>
  axios.post('/watchlist/addWatchlist', input);

export const deleteWatchlist = (watchlistId) =>
  axios.delete(`/watchlist/deleteWatchlist/${watchlistId}`);
