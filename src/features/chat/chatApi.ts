import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type Message = {
    id: string;
    user: string;
    text: string;
    time: string;
};

export const chatApi = createApi({
    reducerPath: "chatApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
    tagTypes: ["Chat"],
    endpoints: (builder) => ({
        getMessages: builder.query<{ messages: Message[] }, string>({
            query: (chatId) => ({ url: `/messages/${chatId}` }),
            providesTags: () => [{ type: "Chat" }],
        }),
    }),
});

export const { useLazyGetMessagesQuery } = chatApi;
