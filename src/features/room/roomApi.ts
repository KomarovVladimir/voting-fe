import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Item = {
    id: string;
    name: string;
    votes: number;
    roomId: string | number;
};

type ItemsData = { items: Item[] };

type RoomData = {
    room: {
        id: string;
        name: string;
        status: string;
        endingDate: string;
    };
};

export const roomApi = createApi({
    reducerPath: "roomApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
    tagTypes: ["Room", "Items"],
    endpoints: (builder) => ({
        getRoomData: builder.query<RoomData, string>({
            query: (roomId) => ({ url: `rooms/${roomId}` }),
            providesTags: () => [{ type: "Room" }],
        }),
        getItems: builder.query<ItemsData, string>({
            query: (roomId) => ({ url: `rooms/${roomId}/items` }),
            providesTags: () => [{ type: "Items" }],
        }),
        addItem: builder.mutation<
            { success: boolean; id: number },
            Partial<Item>
        >({
            query: (body) => ({
                url: `/rooms/addItem`,
                method: "POST",
                body,
            }),
            invalidatesTags: [{ type: "Items" }],
        }),
        deleteItem: builder.mutation<{ success: boolean; id: number }, string>({
            query: (id) => ({
                url: `/rooms/deleteItem`,
                method: "DELETE",
                body: { id },
            }),
            invalidatesTags: [{ type: "Items" }],
        }),
    }),
});

export const {
    useLazyGetRoomDataQuery,
    useLazyGetItemsQuery,
    useAddItemMutation,
    useDeleteItemMutation,
} = roomApi;
