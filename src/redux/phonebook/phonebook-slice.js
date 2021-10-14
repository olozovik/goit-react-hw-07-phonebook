import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const phonebookApi = createApi({
  reducerPath: 'items',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6167024d13aa1d00170a694c.mockapi.io/api',
  }),
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `/contacts`,
    }),
  }),
});

export const { useGetContactsQuery } = phonebookApi;
