import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonsApi = createApi({
  reducerPath: "pokemonsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/pokemon" }),
  endpoints: (builder) => ({
    getAllPokemons: builder.query({
      query: () => `?offset=0&limit=20`,
    }),

    getPokemonById: builder.query({
      query: (id) => `/${id}`,
    }),
  }),
});

export const { useGetAllPokemonsQuery, useGetPokemonByIdQuery } = pokemonsApi;
