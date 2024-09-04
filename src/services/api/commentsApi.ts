import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface PostComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export const commentApi = createApi({
  reducerPath: 'commentApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    getPostsComments: builder.query<PostComment[], void>({
      query: () => `/comments`,
    }),
  }),
});

export const { useGetPostsCommentsQuery } = commentApi;
