import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface UserGeo {
  lat: string;
  lng: string;
}

interface UserAdress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: UserGeo;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserAdress;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    getUserByUsername: builder.query<User[], string>({
      query: (username) => `/users?username=${username}`,
    }),
  }),
});

export const { useGetUserByUsernameQuery } = userApi;
