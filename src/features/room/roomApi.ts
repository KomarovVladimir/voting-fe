import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type Item = {
    id: string;
    name: string;
    votes: number;
};

export const roomApi = createApi({
    reducerPath: "roomApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
    tagTypes: ["Items"],
    endpoints: (builder) => ({
        getItems: builder.query<{ items: Item[] }, string>({
            query: (roomId) => ({ url: `rooms/${roomId}/items` }),
            providesTags: () => [{ type: "Items" }],
        }),
    }),
});

export const { useLazyGetItemsQuery } = roomApi;
