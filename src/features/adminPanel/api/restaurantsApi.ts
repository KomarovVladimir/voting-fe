import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Restaurant } from "types/Restaurant.type";

export const restaurantsApi = createApi({
    reducerPath: "restaurantsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
    tagTypes: ["Restaurant"],
    endpoints: (build) => ({
        getRestaurant: build.query<Restaurant, number>({
            query: (id) => ({ url: `/restaurants/${id}` }),
            providesTags: (result, error, id) => [{ type: "Restaurant", id }],
        }),
        getRestaurants: build.query<{ restaurants: Restaurant[] }, void>({
            query: () => ({ url: `/restaurants` }),
            providesTags: () => [{ type: "Restaurant" }],
        }),
        getRestaurantMenu: build.query<Restaurant, number>({
            query: (id) => ({ url: `/restaurants/${id}/menu` }),
            providesTags: (result, error, id) => [{ type: "Restaurant", id }],
        }),
    }),
});

export const { useGetRestaurantQuery, useGetRestaurantsQuery } = restaurantsApi;
