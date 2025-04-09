import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const baseApi = createApi({
  reducerPath: "rickAndMortyApi",
  tagTypes: ["RickAndMorty"],
  baseQuery: fetchBaseQuery({
    // baseUrl: process.env.REACT_APP_BASE_URL,
    baseUrl: "https://rickandmortyapi.com/api/",
  }),
  endpoints: () => ({}),
})