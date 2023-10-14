import { QueryReturnValue } from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IRoom } from "../../types/roomTypes";

//TODO: Move the types
export interface ICreateRoomQuery {
    name: string;
    userId: number;
    creationDate: Date;
}

//TODO: Add QueryReturnValue everywhere
export const roomsManagerApi = createApi({
    reducerPath: "roomsManagerApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
    tagTypes: ["Rooms"],
    endpoints: (builder) => ({
        getRooms: builder.query<IRoom[], void>({
            query: () => ({ url: `/rooms` }),
            providesTags: () => [{ type: "Rooms" }],
        }),
        createRoom: builder.mutation<QueryReturnValue, ICreateRoomQuery>({
            query: (body) => ({
                url: "/rooms",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Rooms"],
        }),
        deleteRoom: builder.mutation<QueryReturnValue, number>({
            query: (id) => ({
                url: "/rooms",
                method: "DELETE",
                body: { id },
            }),
            invalidatesTags: ["Rooms"],
        }),
    }),
});

export const {
    useGetRoomsQuery,
    useCreateRoomMutation,
    useDeleteRoomMutation,
} = roomsManagerApi;
