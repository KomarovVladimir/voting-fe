import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Item = {
    id: string;
    name: string;
    votes: number;
};

type RoodData = {
    id: string;
    name: string;
    status: string;
    endingDate: string;
    items: Item[];
};

export const roomApi = createApi({
    reducerPath: "roomApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
    tagTypes: ["Items"],
    endpoints: (builder) => ({
        getRoomData: builder.query<RoodData, string>({
            query: (roomId) => ({ url: `rooms/${roomId}` }),
            providesTags: () => [{ type: "Items" }],
        }),
    }),
});

export const { useLazyGetRoomDataQuery } = roomApi;
