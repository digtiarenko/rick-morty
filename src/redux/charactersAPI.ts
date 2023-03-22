/* eslint-disable import/no-cycle */
import { BaseQueryFn, createApi } from '@reduxjs/toolkit/query/react';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { Character, CharactersResponse, NormalizedCharacter } from '../types/types';
import { charactersTransform } from '../utils/dataFunctions';

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
export type ArgType = { page: number; query: string };

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
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data,
        },
      };
    }
  };

export const charactersApi = createApi({
  reducerPath: ' characters',
  baseQuery: axiosBaseQuery({
    baseUrl: baseURL!,
  }),
  tagTypes: ['characters', 'search'],

  endpoints: (builder) => ({
    getCharacters: builder.query<NormalizedCharacter[], ArgType>({
      query: (arg) => {
        const { page = 1, query = '' } = arg;
        const name = query;
        return {
          url: `character/`,
          params: { name, page },
          method: 'GET',
        };
      },
      serializeQueryArgs: ({ endpointName }) => endpointName,
      transformResponse: (response: CharactersResponse) => charactersTransform(response),
      merge: (currentCache, newItems, { arg }) => {
        if (arg.page > 1) {
          return [...currentCache, ...newItems];
        }
        return newItems;
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
      providesTags: ['characters'],
    }),
  }),
});

// export const findCharacterApi = createApi({
//   reducerPath: 'findCharacter',
//   baseQuery: axiosBaseQuery({
//     baseUrl: baseURL!,
//   }),
//   tagTypes: ['findCharacter'],

//   endpoints: (builder) => ({
//     findCharacters: builder.query<NormalizedCharacter[], string>({
//       query: (query) => ({
//         url: `character/?name=${query}`,
//         method: 'GET',
//       }),
//       serializeQueryArgs: ({ endpointName }) => endpointName,
//       transformResponse: (response: CharacterResponse) => charactersReducer(response),
//       merge: (currentCache, newItems) => [...currentCache, ...newItems],
//       forceRefetch({ currentArg, previousArg }) {
//         return currentArg !== previousArg;
//       },
//       providesTags: ['findCharacter'],
//     }),
//   }),
// });

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

// export const { useFindCharactersQuery } = findCharacterApi;
export const { useGetCharactersQuery } = charactersApi;
export const { useGetOneCharacterQuery } = oneCharacterApi;
