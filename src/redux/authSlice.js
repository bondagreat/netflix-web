import { createSlice } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';

import * as authApi from '../apis/auth-api';
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from '../utils/local-storage';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: getAccessToken() ? true : null,
  },
  reducers: {
    getMe: (state, action) => {
      state.user = action.payload;
    },
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state, action) => {
      removeAccessToken();
      state.user = null;
    },
    updateProfile: (state, action) => {
      state.user.Profiles[action.payload.arrayIdx] = action.payload.newProfile;
    },
    addProfile: (state, action) => {
      state.user.Profiles.push(action.payload);
    },
    deleteProfile: (state, action) => {
      state.user.Profiles.splice(action.payload, 1);
    },
    addPin: (state, action) => {
      state.user.Profiles[action.payload.arrayIdx] = {
        ...state.user.Profiles[action.payload.arrayIdx],
        pin: action.payload.pin,
      };
    },
  },
});

export const {
  login,
  logout,
  getMe,
  updateProfile,
  addProfile,
  deleteProfile,
  addPin,
} = authSlice.actions;

export default authSlice.reducer;

export const loginAPI = (email, password) => async (dispatch) => {
  try {
    const res = await authApi.login({ email, password });
    setAccessToken(res.data.accessToken);
    const user = jwtDecode(res.data.accessToken);
    dispatch(login(user));
  } catch (err) {
    console.log(err.response.data?.message);
  }
};

export const fetchAuthUser = () => async (dispatch) => {
  try {
    const res = await authApi.getMe();
    dispatch(getMe(res.data.user));
  } catch (err) {
    removeAccessToken();
  }
};
