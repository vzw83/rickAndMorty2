import {baseApi} from "../../app/baseApi";
import {Character, CharactersResponse} from "../../utils/types/types";


export const characterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCharacters: builder.query<CharactersResponse, {page: number, status: string,species: string, gender: string, nameCharacter: string }>({
      query: (arg) =>
        `character?page=${arg.page}&name=${arg.nameCharacter}&status=${arg.status}&species=${arg.species}&gender=${arg.gender}`,
      transformResponse: async (response: CharactersResponse) => {
        await new Promise((resolve) => setTimeout(resolve, 2000)); // задержка 2 секунды
        return response;
      },
    }),
    getMultipleCharacters:builder.query<Character[],number[]>({
        query: (ids) => `character/${[ids]}`,
        // transformResponse: (res: Character[] ) => res,
        // providesTags: ["RickAndMorty"],

      },
    ),
    getSingleCharacters: builder.query<Character, number>({
        query: (id) => `character/${id}`,
        // transformResponse: (res: Character) => res,
        // providesTags: ["RickAndMorty"]
      },
    ),
  })
})

export const {useGetCharactersQuery,  useGetMultipleCharactersQuery, useGetSingleCharactersQuery} = characterApi


