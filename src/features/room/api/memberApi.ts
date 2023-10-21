import { QueryReturnValue } from "@reduxjs/toolkit/dist/query/baseQueryTypes";

import { api } from "services/api";

import { MemberData, ExcludeMemberRequest } from "../types";

export const memberApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getMembers: builder.query<MemberData[], string>({
            query: (roomId) => ({ url: `/room/${roomId}/members` }),
            providesTags: () => [{ type: "Members" }],
        }),
        excludeMember: builder.mutation<QueryReturnValue, ExcludeMemberRequest>(
            {
                query: ({ roomId, userId }) => ({
                    url: `/room/${roomId}/members/${userId}`,
                    method: "DELETE",
                }),
                invalidatesTags: [{ type: "Members" }],
            }
        ),
    }),
});

export const { useLazyGetMembersQuery, useExcludeMemberMutation } = memberApi;
