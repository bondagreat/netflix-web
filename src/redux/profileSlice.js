import { createSlice } from '@reduxjs/toolkit';
import * as profileApi from '../apis/profile-api';
import {
  getProfileId,
  setProfileId,
  removeProfileId,
} from '../utils/local-storage';

const profileSlice = createSlice({
  name: 'user',
  initialState: {
    profile: getProfileId() ? true : null,
    currentProfile: null,
  },
  reducers: {
    getProfile: (state, action) => {
      state.currentProfile = action.payload;
    },
    setCurrentProfile: (state, action) => {
      state.currentProfile = action.payload;
      setProfileId(action.payload.id);
    },
  },
});

export const { getProfile, getAllProfile, setCurrentProfile } =
  profileSlice.actions;

export default profileSlice.reducer;

export const fetchProfile = (id) => async (dispatch) => {
  try {
    // setProfileId(id);
    const res = await profileApi.getProfile(id);
    dispatch(getProfile(res.data.profile));
  } catch (err) {
    console.log(err);
  }
};
