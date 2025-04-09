import {baseApi} from "../../app/baseApi";
import {Episode, EpisodesResponse, Locations} from "../../utils/types/types";


export const episodesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEpisodes: builder.query<EpisodesResponse, void>({
        query: () => `episode`,

        transformResponse: (res: EpisodesResponse) => res,
        providesTags: ["RickAndMorty"]
      }
    ),
    getMultipleEpisodes: builder.query<Episode, number>({
        query: (id = 1) => `episode/${id}`,

        transformResponse: (res: Episode) => res,
        providesTags: ["RickAndMorty"]
      },
    )
  })

})

export const {useGetEpisodesQuery, useGetMultipleEpisodesQuery} = episodesApi

