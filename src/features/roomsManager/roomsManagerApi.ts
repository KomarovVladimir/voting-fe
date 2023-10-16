import { QueryReturnValue } from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IRoom } from "../../types/roomTypes";

//TODO: Move the types
export interface ICreateRoomQuery {
    name: string;
    userId: number;
    creationDate: Date;
}

//TODO: Replace body with params
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
        getUserRooms: builder.query<IRoom[], number>({
            query: (userId) => ({ url: `/user/${userId}/rooms` }),
            providesTags: () => [{ type: "Rooms" }],
        }),
        createRoom: builder.mutation<QueryReturnValue, ICreateRoomQuery>({
            query: (body) => ({
                url: "/room",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Rooms"],
        }),
        deleteRoom: builder.mutation<QueryReturnValue, number>({
            query: (id) => ({
                url: `/room/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Rooms"],
        }),
        joinRoom: builder.mutation<
            QueryReturnValue,
            { roomId: number; userId: number }
        >({
            query: ({ roomId, userId }) => ({
                url: `/room/${roomId}/join/${userId}`,
                method: "POST",
            }),
            invalidatesTags: ["Rooms"],
        }),
        leaveRoom: builder.mutation<
            QueryReturnValue,
            { roomId: number; userId: number }
        >({
            query: ({ roomId, userId }) => ({
                url: `/room/${roomId}/join/${userId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Rooms"],
        }),
    }),
});

export const {
    useGetUserRoomsQuery,
    useJoinRoomMutation,
    useLeaveRoomMutation,
    useCreateRoomMutation,
    useDeleteRoomMutation,
} = roomsManagerApi;
