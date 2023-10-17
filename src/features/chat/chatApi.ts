import { QueryReturnValue } from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//TODO: Move the types
export interface IMessage {
    id: string;
    userName: string;
    text: string;
    date: string;
}

export interface IMessageQuery {
    roomId: string;
    userId: number;
    text: string;
    postingDate: Date;
}

//TODO: Update the response types
export const chatApi = createApi({
    reducerPath: "chatApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
    tagTypes: ["Chat"],
    endpoints: (builder) => ({
        getMessages: builder.query<IMessage[], string>({
            query: (roomId) => ({ url: `room/${roomId}/messages` }),
            providesTags: () => [{ type: "Chat" }],
        }),
        sendMessage: builder.mutation<QueryReturnValue, IMessageQuery>({
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
