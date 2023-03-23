/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

interface PageState {
  value: number;
}
const initialState: PageState = {
  value: 1,
};

export const pageSlice = createSlice({
  name: 'pages',
  initialState,
  reducers: {
    addPage: (state: { value: number }) => {
      state.value += 1;
    },
    setPageToOne: (state) => {
      state.value = initialState.value;
    },
  },
});

export const { addPage, setPageToOne } = pageSlice.actions;
export const getPage = (state: RootState) => state.pages.value;
