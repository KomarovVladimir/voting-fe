import { QueryReturnValue } from "@reduxjs/toolkit/dist/query/baseQueryTypes";

import { api } from "services/api";

import { RoomData } from "../types";

//TODO: Add more specific types
export const roomApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getRoomData: builder.query<RoomData, string>({
            query: (roomId) => ({ url: `room/${roomId}` }),
            providesTags: () => [{ type: "Rooms" }],
        }),
        updateRoom: builder.mutation<
            QueryReturnValue,
            Pick<RoomData, "id" | "name" | "status">
        >({
            query: (body) => ({
                url: `/room/${body.id}`,
                method: "PATCH",
                body,
            }),
            invalidatesTags: [{ type: "Rooms" }],
        }),
    }),
});

export const { useGetRoomDataQuery, useUpdateRoomMutation } = roomApi;
