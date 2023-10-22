import { QueryReturnValue } from "@reduxjs/toolkit/dist/query/baseQueryTypes";

import { api } from "app/services/api";
import { RoomData } from "features";

import { CreateRoomRequest, JoinRoomRequest, LeaveRoomRequest } from "../types";

//TODO: Replace body with params
export const roomsManagerApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getRooms: builder.query<RoomData[], void>({
            query: () => ({ url: `/rooms` }),
            providesTags: () => [{ type: "Rooms" }],
        }),
        getUserRooms: builder.query<RoomData[], number>({
            query: (userId) => ({ url: `/users/${userId}/rooms` }),
            providesTags: () => [{ type: "Rooms" }],
        }),
        createRoom: builder.mutation<QueryReturnValue, CreateRoomRequest>({
            query: (body) => ({
                url: "/rooms",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Rooms"],
        }),
        deleteRoom: builder.mutation<QueryReturnValue, number>({
            query: (id) => ({
                url: `/rooms/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Rooms"],
        }),
        joinRoom: builder.mutation<QueryReturnValue, JoinRoomRequest>({
            query: ({ roomId, userId }) => ({
                url: `/rooms/${roomId}/join/${userId}`,
                method: "POST",
            }),
            invalidatesTags: ["Rooms"],
        }),
        leaveRoom: builder.mutation<QueryReturnValue, LeaveRoomRequest>({
            query: ({ roomId, userId }) => ({
                url: `/rooms/${roomId}/join/${userId}`,
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
