import { QueryReturnValue } from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IRoom, IItem } from "types/roomTypes";

//TODO: Add more specific types
export const roomApi = createApi({
    reducerPath: "roomApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
    tagTypes: ["Rooms", "Items"],
    endpoints: (builder) => ({
        getRoomData: builder.query<IRoom, string>({
            query: (roomId) => ({ url: `room/${roomId}` }),
            providesTags: () => [{ type: "Rooms" }],
        }),
        getItems: builder.query<IItem[], string>({
            query: (roomId) => ({ url: `room/${roomId}/items` }),
            providesTags: () => [{ type: "Items" }],
        }),
        addItem: builder.mutation<
            QueryReturnValue,
            Pick<IItem, "roomId" | "name">
        >({
            query: ({ roomId, ...body }) => ({
                url: `/room/${roomId}/item`,
                method: "POST",
                body,
            }),
            invalidatesTags: [{ type: "Items" }],
        }),
        deleteItem: builder.mutation<
            QueryReturnValue,
            Pick<IItem, "roomId" | "id">
        >({
            query: ({ roomId, id }) => ({
                url: `/room/${roomId}/item/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [{ type: "Items" }],
        }),
        updateRoom: builder.mutation<
            QueryReturnValue,
            Pick<IRoom, "id" | "name" | "status">
        >({
            query: (body) => ({
                url: `/room/${body.id}`,
                method: "PATCH",
                body,
            }),
            invalidatesTags: [{ type: "Rooms" }],
        }),
        vote: builder.mutation<
            QueryReturnValue,
            { roomId: number; userId: number; itemId: number }
        >({
            query: ({ roomId, userId, itemId }) => ({
                url: `/room/${roomId}/item/${itemId}/user/${userId}/vote`,
                method: "POST",
            }),
            invalidatesTags: [{ type: "Items" }],
        }),
        removeVote: builder.mutation<
            QueryReturnValue,
            { roomId: number; userId: number; itemId: number }
        >({
            query: ({ roomId, userId, itemId }) => ({
                url: `/room/${roomId}/user/${userId}/item/${itemId}/vote`,
                method: "DELETE",
            }),
            invalidatesTags: [{ type: "Items" }],
        }),
    }),
});

export const {
    useGetRoomDataQuery,
    useGetItemsQuery,
    useAddItemMutation,
    useDeleteItemMutation,
    useUpdateRoomMutation,
    useVoteMutation,
} = roomApi;
