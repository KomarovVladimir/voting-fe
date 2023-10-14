import { QueryReturnValue } from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IUser } from "../types/types";

export interface IAuthData {
    id: number;
    email: string;
    password: string;
}

export interface IRegistrationData {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
    tagTypes: ["Auth"],
    endpoints: (builder) => ({
        loginRequest: builder.mutation<IUser, IAuthData>({
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
            IRegistrationData
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
