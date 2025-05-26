import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { authHeader } from '@/libs/authHeader';

const baseUrl =
  process.env.NEXT_PUBLIC_REACT_APP_MAIN_API_URL + '/filemetasapi';

export const fileMetaBaseApi = createApi({
  reducerPath: 'fileMetaApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const authHeaders = authHeader();
      if (authHeaders.Authorization) {
        headers.set('Authorization', authHeaders.Authorization);
        headers.set('Content-Type', 'multipart/form-data');
      }

      return headers;
    }
  }),
  endpoints: (builder) => ({})
});
