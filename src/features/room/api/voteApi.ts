import { QueryReturnValue } from "@reduxjs/toolkit/dist/query/baseQueryTypes";

import { api } from "app/services/api";

import { VoteRequest } from "../types";

//TODO: Add more specific types
export const voteApi = api.injectEndpoints({
    endpoints: (builder) => ({
        vote: builder.mutation<QueryReturnValue, VoteRequest>({
            query: ({ roomId, userId, itemId }) => ({
                url: `/room/${roomId}/item/${itemId}/user/${userId}/vote`,
                method: "POST",
            }),
            invalidatesTags: [{ type: "Items" }],
        }),
        removeVote: builder.mutation<QueryReturnValue, VoteRequest>({
            query: ({ roomId, userId, itemId }) => ({
                url: `/room/${roomId}/item/${itemId}/user/${userId}/vote`,
                method: "DELETE",
            }),
            invalidatesTags: [{ type: "Items" }],
        }),
    }),
});

export const { useVoteMutation, useRemoveVoteMutation } = voteApi;
