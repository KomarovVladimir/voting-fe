import { QueryReturnValue } from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IRoom, IItem } from "types/roomTypes";

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
    }),
});

export const {
    useGetRoomDataQuery,
    useGetItemsQuery,
    useAddItemMutation,
    useDeleteItemMutation,
    useUpdateRoomMutation,
} = roomApi;
