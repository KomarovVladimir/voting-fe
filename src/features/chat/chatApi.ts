import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type Message = {
    id: string;
    userName: string;
    avatar: string;
    text: string;
    date: string;
    roomId: number | string;
};

export const chatApi = createApi({
    reducerPath: "chatApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
    tagTypes: ["Chat"],
    endpoints: (builder) => ({
        getMessages: builder.query<Message[], string>({
            query: (roomId) => ({ url: `rooms/${roomId}/messages` }),
            providesTags: () => [{ type: "Chat" }],
        }),
        sendMessage: builder.mutation<
            { success: boolean; id: number },
            Partial<Message>
        >({
            query: ({ roomId, ...body }) => ({
                url: `rooms/${roomId}/messages`,
                method: "POST",
                body,
            }),
            invalidatesTags: [{ type: "Chat" }],
        }),
        deleteMessage: builder.mutation<
            { success: boolean; id: number },
            string
        >({
            query: (messageId) => ({
                url: `/messages/${messageId}`,
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
