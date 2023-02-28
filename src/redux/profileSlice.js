import { createSlice } from '@reduxjs/toolkit';
import * as authApi from '../apis/auth-api';
import { removeAccessToken } from '../utils/local-storage';

const profileSlice = createSlice({
  name: 'user',
  initialState: {
    profile: null,
  },
  reducers: {
    getMe: (state, action) => {
      state.profile = action.payload;
    },
    getProfile: (state, action) => {
      state.profile = action.payload;
    },
    addProfile: (state, action) => {
      state.profile = action.payload;
    },
    editProfile: (state, action) => {},
    deleteProfile: (state, action) => {},
    editPin: (state, action) => {},
    deletePin: (state, action) => {},
  },
});

export const { getMe } = profileSlice.actions;

export default profileSlice.reducer;

export const fetchAuthUser = () => async (dispatch) => {
  try {
    const res = await authApi.getMe();
    dispatch(getMe(res.data.user));
  } catch (err) {
    removeAccessToken();
  }
};
