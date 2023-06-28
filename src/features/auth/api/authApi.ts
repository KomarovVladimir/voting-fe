import { QueryReturnValue } from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { User } from "types/User.type";

export type AuthData = {
    email: string;
    password: string;
};

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
    tagTypes: ["Auth"],
    endpoints: (builder) => ({
        loginRequest: builder.mutation<QueryReturnValue, AuthData>({
            query: (payload) => ({
                url: "/login",
                method: "POST",
                body: payload,
            }),
            invalidatesTags: ["Auth"],
        }),
        logoutRequest: builder.mutation<void, User>({
            query: (payload) => ({
                url: "/logout",
                method: "POST",
                body: payload,
            }),
            invalidatesTags: ["Auth"],
        }),
    }),
});

export const { useLoginRequestMutation, useLogoutRequestMutation } = authApi;
