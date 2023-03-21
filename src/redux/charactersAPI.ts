import { BaseQueryFn, createApi } from '@reduxjs/toolkit/query/react';
import axios, { AxiosRequestConfig } from 'axios';
import { Character, CharacterResponse, NormalizedCharacter } from '../types/types';
import { charactersReducer } from '../utils/dataFunctions';

const { VITE_APP_DB_BASE_URL } = import.meta.env;
const baseURL: string | undefined = VITE_APP_DB_BASE_URL;

export type CharacterListState = {
  data: Character[] | [];
  loading: boolean;
  error: null;
};

export const initialState: CharacterListState = {
  loading: true,
  data: [],
  error: null,
};

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' },
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
      params?: AxiosRequestConfig['params'];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params }) => {
    const result = await axios({ url: baseUrl + url, method, data, params });
    return { data: result.data };
    // Add error handling
  };

export const charactersApi = createApi({
  reducerPath: ' characters',
  baseQuery: axiosBaseQuery({
    baseUrl: baseURL!,
  }),
  tagTypes: ['characters'],

  endpoints: (builder) => ({
    getCharacters: builder.query<NormalizedCharacter[], number>({
      query: (page) => ({
        url: `character/?page=${page}`,
        method: 'GET',
      }),
      serializeQueryArgs: ({ endpointName }) => endpointName,
      transformResponse: (response: CharacterResponse) => charactersReducer(response),
      merge: (currentCache, newItems) => [...currentCache, ...newItems],
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
      keepUnusedDataFor: 30,
      providesTags: ['characters'],
    }),
  }),
});

export const oneCharacterApi = createApi({
  reducerPath: 'oneCharacter',
  baseQuery: axiosBaseQuery({
    baseUrl: baseURL!,
  }),
  tagTypes: ['oneCharacter'],

  endpoints: (builder) => ({
    getOneCharacter: builder.query<Character, unknown>({
      query: (id) => ({
        url: `/character/${id}`,
        method: 'GET',
        providesTags: ['oneCharacter'],
      }),
    }),
  }),
});

export const { useGetCharactersQuery } = charactersApi;
export const { useGetOneCharacterQuery } = oneCharacterApi;
