import { createSlice } from '@reduxjs/toolkit';
import * as watchlistApi from '../apis/watchlist-api';

const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState: {
    mylist: null,
  },
  reducers: {
    getWatchlist: (state, action) => {
      state.mylist = action.payload;
    },
    addWatchlist: (state, action) => {
      state.mylist = [...state.mylist, action.payload];
    },
    deleteWatchlist: (state, action) => {
      state.mylist = action.payload;
    },
  },
});

export const { getWatchlist } = watchlistSlice.actions;

export default watchlistSlice.reducer;

export const fetchWatchlist = (profileId) => async (dispatch) => {
  try {
    if (profileId) {
      const res = await watchlistApi.getWatchlist(profileId);
      dispatch(getWatchlist(res.data.watchlist));
    }
  } catch (err) {
    console.log(err);
  }
};

export const addWatchlist = (input) => async (dispatch) => {
  try {
    await watchlistApi.addWatchlist(input);
    const res = await watchlistApi.getWatchlist(input.profileId);
    dispatch(getWatchlist(res.data.watchlist));
  } catch (err) {
    console.log(err);
  }
};

export const deleteWatchlist = (watchlistId, profileId) => async (dispatch) => {
  try {
    await watchlistApi.deleteWatchlist(watchlistId);

    const res = await watchlistApi.getWatchlist(profileId);
    dispatch(getWatchlist(res.data.watchlist));
  } catch (err) {
    console.log(err);
  }
};
