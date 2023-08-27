import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type Message = {
    id: string;
    userName: string;
    text: string;
    date: string;
    roomId: number | string;
};

export const chatApi = createApi({
    reducerPath: "chatApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
    tagTypes: ["Chat"],
    endpoints: (builder) => ({
        getMessages: builder.query<{ messages: Message[] }, string>({
            query: (roomId) => ({ url: `rooms/${roomId}/chat` }),
            providesTags: () => [{ type: "Chat" }],
        }),
        sendMessage: builder.mutation<
            { success: boolean; id: number },
            Partial<Message>
        >({
            query: (body) => ({
                url: `/chat`,
                method: "POST",
                body,
            }),
            invalidatesTags: [{ type: "Chat" }],
        }),
        deleteMessage: builder.mutation<
            { success: boolean; id: number },
            string
        >({
            query: (id) => ({
                url: `/chat`,
                method: "DELETE",
                body: { id },
            }),
            invalidatesTags: [{ type: "Chat" }],
        }),
    }),
});

export const {
    useLazyGetMessagesQuery,
    useDeleteMessageMutation,
    useSendMessageMutation,
} = chatApi;
