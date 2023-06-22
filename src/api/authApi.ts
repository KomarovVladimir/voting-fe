import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//TODO: Replace with an actual base url
const tempUrl = "http://localhost:3000";

type User = {
    name: "string";
    email: "string";
};

type AuthState = {
    user: User | null;
    token: string | null;
};

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
        authRequest: builder.mutation<AuthState, AuthPayload>({
            query: (payload) => ({
                url: "/api/users/login",
                method: "POST",
                body: payload,
            }),
        }),
    }),
});

export const { useAuthRequestMutation } = authApi;
