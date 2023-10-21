import { QueryReturnValue } from "@reduxjs/toolkit/dist/query/baseQueryTypes";

import { api } from "services/api";

import { GetItemsRequest, ItemData } from "../types";

export const itemApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getItems: builder.query<ItemData[], GetItemsRequest>({
            query: ({ roomId, userId }) => ({
                url: `room/${roomId}/items/${userId}`,
            }),
            providesTags: () => [{ type: "Items" }],
        }),

        addItem: builder.mutation<
            QueryReturnValue,
            Pick<ItemData, "roomId" | "name">
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
            Pick<ItemData, "roomId" | "id">
        >({
            query: ({ roomId, id }) => ({
                url: `/room/${roomId}/item/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [{ type: "Items" }],
        }),
    }),
});

export const { useGetItemsQuery, useAddItemMutation, useDeleteItemMutation } =
    itemApi;
