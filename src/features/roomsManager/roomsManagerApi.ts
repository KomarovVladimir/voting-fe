import { QueryReturnValue } from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IRoom } from "../../types/roomTypes";

export const roomsManagerApi = createApi({
    reducerPath: "roomsManagerApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
    tagTypes: ["Rooms"],
    endpoints: (builder) => ({
        getRooms: builder.query<IRoom[], void>({
            query: () => ({ url: `/rooms` }),
            providesTags: () => [{ type: "Rooms" }],
        }),
        createRoom: builder.mutation<QueryReturnValue, string>({
            query: (name) => ({
                url: "/rooms",
                method: "POST",
                body: { name },
            }),
            invalidatesTags: ["Rooms"],
        }),
    }),
});

export const { useGetRoomsQuery, useCreateRoomMutation } = roomsManagerApi;
