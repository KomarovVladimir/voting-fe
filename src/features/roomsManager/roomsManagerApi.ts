import { QueryReturnValue } from "@reduxjs/toolkit/dist/query/baseQueryTypes";

import { api } from "services/api";
import { RoomData } from "features";

//TODO: Move the types
export interface ICreateRoomQuery {
    name: string;
    userId: number;
    creationDate: Date;
}

//TODO: Replace body with params
//TODO: Add QueryReturnValue everywhere
export const roomsManagerApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getRooms: builder.query<RoomData[], void>({
            query: () => ({ url: `/rooms` }),
            providesTags: () => [{ type: "Rooms" }],
        }),
        getUserRooms: builder.query<RoomData[], number>({
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
