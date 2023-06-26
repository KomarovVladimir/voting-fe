import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { User } from "types/User.type";

export const usersApi = createApi({
    reducerPath: "usersApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
    tagTypes: ["User"],
    endpoints: (build) => ({
        getUser: build.query<User, number>({
            query: (id) => ({ url: `/users/${id}` }),
            providesTags: (result, error, id) => [{ type: "User", id }],
        }),
        getUsersList: build.query<{ users: User[] }, void>({
            query: () => ({ url: `/users` }),
            providesTags: () => [{ type: "User" }],
        }),
    }),
});

export const { useGetUserQuery, useGetUsersListQuery } = usersApi;
