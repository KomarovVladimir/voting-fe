import { QueryReturnValue } from "@reduxjs/toolkit/dist/query/baseQueryTypes";

import { api } from "app/services/api";

import { AuthUser, UserSignInData, UserSignUpData } from "../types";

export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        loginRequest: builder.mutation<AuthUser, UserSignInData>({
            query: (body) => ({
                url: "users/login",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Auth"],
        }),
        logoutRequest: builder.mutation<QueryReturnValue, string>({
            query: (email) => ({
                url: "users/logout",
                method: "POST",
                body: { email },
            }),
            invalidatesTags: ["Auth"],
        }),
        registrationRequest: builder.mutation<QueryReturnValue, UserSignUpData>(
            {
                query: (body) => ({
                    url: "users/register",
                    method: "POST",
                    body,
                }),
                invalidatesTags: ["Auth"],
            }
        ),
    }),
});

export const {
    useLoginRequestMutation,
    useLogoutRequestMutation,
    useRegistrationRequestMutation,
} = authApi;
