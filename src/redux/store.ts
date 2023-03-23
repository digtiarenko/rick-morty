/* eslint-disable import/no-cycle */
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { charactersApi, oneCharacterApi } from './charactersAPI';
import { pageSlice } from './paginationSlice';

const store = configureStore({
  reducer: {
    [charactersApi.reducerPath]: charactersApi.reducer,
    [oneCharacterApi.reducerPath]: oneCharacterApi.reducer,
    pages: pageSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(charactersApi.middleware).concat(oneCharacterApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
