import { authHeader } from '@/libs/authHeader';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = process.env.NEXT_PUBLIC_REACT_APP_MAIN_API_URL + '/tenantsapi';

export const tenantsBaseApi = createApi({
  reducerPath: 'tenantsapi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const authHeaders = authHeader();
      if (authHeaders.Authorization) {
        headers.set('Authorization', authHeaders.Authorization);
      }

      return headers;
    }
  }),
  endpoints: (builder) => ({})
});
