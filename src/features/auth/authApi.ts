import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { User } from "shared/types/User.type";

//TODO: Replace with an actual base url
const tempUrl = "http://localhost:3000";

export type AuthData = {
    email: string;
    password: string;
};

export const authApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: tempUrl,
    }),
    tagTypes: ["Auth"],
    endpoints: (builder) => ({
        loginRequest: builder.mutation<User, AuthData>({
            query: (payload) => ({
                url: "/api/users/login",
                method: "POST",
                body: payload,
            }),
            invalidatesTags: ["Auth"],
        }),
        logoutRequest: builder.mutation({
            query: () => ({
                url: "/api/users/logout",
                method: "POST",
            }),
            invalidatesTags: ["Auth"],
        }),
    }),
});

export const { useLoginRequestMutation, useLogoutRequestMutation } = authApi;
