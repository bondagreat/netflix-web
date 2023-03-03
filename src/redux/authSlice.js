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
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state, action) => {
      removeAccessToken();
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

export const loginAPI = (email, password) => async (dispatch) => {
  try {
    const res = await authApi.login({ email, password });
    setAccessToken(res.data.accessToken);
    const user = jwtDecode(res.data.accessToken);
    // console.log(user);
    dispatch(login(user));
  } catch (err) {
    console.log(err.response.data.message);
  }
};
