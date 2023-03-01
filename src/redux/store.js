import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import profileReducer from './profileSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    user: profileReducer,
  },
});
