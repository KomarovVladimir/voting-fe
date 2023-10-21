import { QueryReturnValue } from "@reduxjs/toolkit/dist/query/baseQueryTypes";

import { api } from "app/services/api";

import { PostMessageRequest, MessageData } from "../types";

export const chatApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getMessages: builder.query<MessageData[], string>({
            query: (roomId) => ({ url: `room/${roomId}/messages` }),
            providesTags: () => [{ type: "Chat" }],
        }),
        sendMessage: builder.mutation<QueryReturnValue, PostMessageRequest>({
            query: ({ roomId, ...body }) => ({
                url: `room/${roomId}/message`,
                method: "POST",
                body,
            }),
            invalidatesTags: [{ type: "Chat" }],
        }),
        deleteMessage: builder.mutation<QueryReturnValue, string>({
            query: (messageId) => ({
                url: `/message/${messageId}`,
                method: "DELETE",
            }),
            invalidatesTags: [{ type: "Chat" }],
        }),
    }),
});

export const {
    useGetMessagesQuery,
    useDeleteMessageMutation,
    useSendMessageMutation,
} = chatApi;
