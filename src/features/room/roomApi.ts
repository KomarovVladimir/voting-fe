import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { ItemData, ItemsData, Room } from "./types";

export const roomApi = createApi({
    reducerPath: "roomApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
    tagTypes: ["Rooms", "Items"],
    endpoints: (builder) => ({
        getRoomData: builder.query<Room, string>({
            query: (roomId) => ({ url: `rooms/${roomId}` }),
            providesTags: () => [{ type: "Rooms" }],
        }),
        getItems: builder.query<ItemsData, string>({
            query: (roomId) => ({ url: `rooms/${roomId}/items` }),
            providesTags: () => [{ type: "Items" }],
        }),
        addItem: builder.mutation<
            { success: boolean; id: number },
            Partial<ItemData>
        >({
            query: (body) => ({
                url: `/rooms/${body.id}/items`,
                method: "POST",
                body,
            }),
            invalidatesTags: [{ type: "Items" }],
        }),
        deleteItem: builder.mutation<{ success: boolean; id: number }, string>({
            query: (itemId) => ({
                url: `/items/${itemId}`,
                method: "DELETE",
            }),
            invalidatesTags: [{ type: "Items" }],
        }),
        updateRoom: builder.mutation<{ success: boolean }, Room>({
            query: (body) => ({
                url: `/rooms/${body.id}`,
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
