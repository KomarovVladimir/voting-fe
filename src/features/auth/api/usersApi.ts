import { QueryReturnValue } from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IUser } from "features/auth/types/types";

export const usersApi = createApi({
    reducerPath: "usersApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
    tagTypes: ["User"],
    endpoints: (builder) => ({
        getUser: builder.query<IUser, number>({
            query: (id) => ({ url: `/users/${id}` }),
            providesTags: (result, error, id) => [{ type: "User", id }],
        }),
        getUsersList: builder.query<{ users: IUser[] }, void>({
            query: () => ({ url: `/users` }),
            providesTags: () => [{ type: "User" }],
        }),
        deleteUser: builder.mutation<QueryReturnValue, number>({
            query: (payload) => ({
                url: "/users/delete",
                method: "DELETE",
                body: payload,
            }),
            invalidatesTags: ["User"],
        }),
        createUser: builder.mutation<QueryReturnValue, number>({
            query: (payload) => ({
                url: "/users/create",
                method: "POST",
                body: payload,
            }),
            invalidatesTags: ["User"],
        }),
        updateUser: builder.mutation<QueryReturnValue, number>({
            query: (payload) => ({
                url: "/users/update",
                method: "UPDATE",
                body: payload,
            }),
            invalidatesTags: ["User"],
        }),
    }),
});

export const { useGetUserQuery, useGetUsersListQuery } = usersApi;
