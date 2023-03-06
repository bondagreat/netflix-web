import { createSlice } from '@reduxjs/toolkit';
import * as profileApi from '../apis/profile-api';

const profileSlice = createSlice({
  name: 'user',
  initialState: {
    profile: null,
    currentProfile: null,
  },
  reducers: {
    getProfile: (state, action) => {
      state.currentProfile = action.payload;
    },
  },
});

export const { getProfile, getAllProfile } = profileSlice.actions;

export default profileSlice.reducer;

export const fetchProfile = (id) => async (dispatch) => {
  try {
    const res = await profileApi.getProfile(id);
    dispatch(getProfile(res.data.profile));
  } catch (err) {
    console.log(err);
  }
};
