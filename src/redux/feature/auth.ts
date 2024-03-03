import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  count: 1,
};

const authSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
  },
});

export default authSlice.reducer;
export const { increment } = authSlice.actions;
