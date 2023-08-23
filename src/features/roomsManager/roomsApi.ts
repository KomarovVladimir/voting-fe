import { QueryReturnValue } from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type RoomData = {
    id: string;
    name: string;
};

export const roomsApi = createApi({
    reducerPath: "roomsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
    tagTypes: ["Rooms"],
    endpoints: (builder) => ({
        getRooms: builder.query<{ rooms: RoomData[] }, void>({
            query: () => ({ url: `/rooms` }),
            providesTags: () => [{ type: "Rooms" }],
        }),
        createRoom: builder.mutation<QueryReturnValue, RoomData>({
            query: (payload) => ({
                url: "/rooms",
                method: "POST",
                body: payload,
            }),
            invalidatesTags: ["Rooms"],
        }),
    }),
});

export const { useGetRoomsQuery, useCreateRoomMutation } = roomsApi;
