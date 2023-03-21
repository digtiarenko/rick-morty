/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
// import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
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
    increment: (state: { value: number }) => {
      state.value += 1;
    },
  },
});

export const { increment } = pageSlice.actions;
export const getPage = (state: RootState) => state.pages.value;

// export const useAppDispatch: () => AppDispatch = useDispatch;
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
