import { HYDRATE } from 'next-redux-wrapper';

const { createApi, fetchBaseQuery } = require('@reduxjs/toolkit/query/react');

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: ['Tour', 'User', 'Review', 'Stripe'],
  endpoints: (build) => ({
    getTours: build.query({
      query: () => '/tours',
      providesTags: (result) => [
        { type: 'Tour', id: 'LIST' },
        ...result.tours.map((id) => ({ type: 'Tour', id })),
      ],
    }),
    getTour: build.query({
      query: (slug) => `/tours/${slug}`,
      providesTags: (result) => [{ type: 'Tour', id: 'LIST' }],
    }),
    login: build.mutation({
      query: (user) => ({
        url: '/login',
        body: user,
        method: 'POST',
      }),
      invalidatesTags: ['User'],
    }),
    logUser: build.query({
      query: () => '/loguser',

      providesTags: ['User'],
    }),
    getStripe: build.query({
      query: () => '',
    }),
  }),
});

export const { getTours, getTour, logUser, getStripe } = apiSlice.endpoints;

export const { useLoginMutation, useLogUserQuery, useGetStripeQuery } =
  apiSlice;
