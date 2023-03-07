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
  },
});

export const { getWatchlist } = watchlistSlice.actions;

export default watchlistSlice.reducer;

export const fetchWatchlist = (profileId) => async (dispatch) => {
  try {
    const res = await watchlistApi.getWatchlist(profileId);
    dispatch(getWatchlist(res.data.watchlist));
  } catch (err) {
    console.log(err);
  }
};

// export const addWatchlist = (input) => async (dispatch) => {
//     try {
//       const res = await watchlistApi.addWatchlist(input);
//       dispatch(addWatchlist(res.data.watchlist));
//     } catch (err) {
//       console.log(err);
//     }
//   };

// export const deleteWatchlist = (watchlistId) => async (dispatch) => {
//     try {
//       const res = await watchlistApi.getWatchlist(watchlistId);
//       dispatch(deleteWatchlist());
//     } catch (err) {
//       console.log(err);
//     }
//   };
