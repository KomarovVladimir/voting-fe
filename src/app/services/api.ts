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

const baseQueryWithReauth: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result.error && result.error.status === 401) {
        // try to get a new token
        const refreshResult = await baseQuery(
            "/refreshToken",
            api,
            extraOptions
        );
        if (refreshResult.data) {
            // retry the initial query
            // result = await baseQuery(args, api, extraOptions);
        } else {
            api.dispatch(logout());
        }
    }
    return result;
};

export const api = createApi({
    baseQuery: baseQueryWithReauth,
    tagTypes: ["Auth", "Rooms", "Items", "Members", "Chat"],
    endpoints: () => ({}),
});
