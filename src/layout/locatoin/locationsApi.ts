import {baseApi} from "../../app/baseApi";
import {Locations, LocationsResponse} from "../../utils/types/types";



export const locationsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getLocations: builder.query<LocationsResponse, void>({
        query: () => `location`,

        transformResponse: (res: LocationsResponse) => res,
        providesTags: ["RickAndMorty"]
      },
    ),
      getMultipleLocations:builder.query<Locations,number>({
          query: (id = 1) => `location/${id}`,

          transformResponse: (res: Locations) => res,
          providesTags: ["RickAndMorty"]
        },
      )
  })

})

export const {useGetLocationsQuery, useGetMultipleLocationsQuery} = locationsApi

