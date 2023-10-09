import { QueryReturnValue } from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { UserData } from "../types/UserData.type";

export type AuthData = {
    email: string;
    password: string;
};

export type RegistrationData = {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
};

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
    tagTypes: ["Auth"],
    endpoints: (builder) => ({
        loginRequest: builder.mutation<UserData, AuthData>({
            query: (payload) => ({
                url: "users/login",
                method: "POST",
                body: payload,
            }),
            invalidatesTags: ["Auth"],
        }),
        logoutRequest: builder.mutation<void, { email: string }>({
            query: (payload) => ({
                url: "users/logout",
                method: "POST",
                body: payload,
            }),
            invalidatesTags: ["Auth"],
        }),
        registrationRequest: builder.mutation<
            QueryReturnValue,
            RegistrationData
        >({
            query: (payload) => ({
                url: "users/register",
                method: "POST",
                body: payload,
            }),
            invalidatesTags: ["Auth"],
        }),
    }),
});

export const {
    useLoginRequestMutation,
    useLogoutRequestMutation,
    useRegistrationRequestMutation,
} = authApi;
