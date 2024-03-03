import { configureStore } from '@reduxjs/toolkit';
import authReducers from './feature/auth';

export const store = configureStore({
  reducer: {
    counter: authReducers,
  },
});
