import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { User } from "shared/types/User.type";

//TODO: Replace with an actual base url
const tempUrl = "http://localhost:3000";

type AuthPayload = {
    email: string;
    password: string;
};

export const authApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: tempUrl,
    }),
    tagTypes: ["Auth"],
    endpoints: (builder) => ({
        authRequest: builder.mutation<User, AuthPayload>({
            query: (payload) => ({
                url: "/api/users/login",
                method: "POST",
                body: payload,
            }),
        }),
    }),
});

export const { useAuthRequestMutation } = authApi;
