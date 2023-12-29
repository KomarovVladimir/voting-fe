import {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
    createApi,
    fetchBaseQuery,
    retry,
} from "@reduxjs/toolkit/query/react";

import { logout } from "features/auth";

//TODO: Add headers preparation
const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
    credentials: "include",
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 2 });

//TODO: Replace localStorage.removeItem("user")
const baseQueryWithLogout: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result.error && result.error.status === 401) {
        localStorage.removeItem("user");
        api.dispatch(logout());
    }
    return result;
};

export const api = createApi({
    baseQuery: baseQueryWithLogout,
    tagTypes: ["Auth", "Rooms", "Items", "Members", "Chat"],
    endpoints: () => ({}),
});
