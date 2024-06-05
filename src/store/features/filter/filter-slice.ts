import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { makeFakeSmallCardFilms } from '../../../mocks/mocks';

export type FilterState = {
    filter: string;
    countFilms: number;
  }

const initialState: FilterState = {
  filter: 'All genres',
  countFilms: makeFakeSmallCardFilms().length,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
    changeCountFilms: (state, action: PayloadAction<number>) => {
      state.countFilms = action.payload;
    }
  },
});

export const { changeFilter, changeCountFilms } = filterSlice.actions;

export default filterSlice.reducer;
