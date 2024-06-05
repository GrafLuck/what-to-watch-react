import { createSlice } from '@reduxjs/toolkit';

export type InterfaceState = {
    countPage: number;
  }

const initialState: InterfaceState = {
  countPage: 1,
};

export const interfaceSlice = createSlice({
  name: 'interface',
  initialState,
  reducers: {
    incrementCountPage: (state) => {
      state.countPage += 1;
    },
    resetCountPage: (state) => {
      state.countPage = 1;
    }

  },
});

export const { incrementCountPage, resetCountPage } = interfaceSlice.actions;

export default interfaceSlice.reducer;
