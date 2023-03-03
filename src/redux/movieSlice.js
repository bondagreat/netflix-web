import { createSlice } from '@reduxjs/toolkit';
import * as movieApi from '../apis/movie-api';

const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    movie: null,
  },
  reducers: {
    getAllMovie: (state, action) => {
      state.movie = action.payload;
    },
  },
});

export const { getAllMovie } = movieSlice.actions;

export default movieSlice.reducer;

export const fetchAllMovie = () => async (dispatch) => {
  try {
    const res = await movieApi.getAllMovie();
    dispatch(getAllMovie(res.data.movie));
  } catch (err) {
    console.log(err);
  }
};
