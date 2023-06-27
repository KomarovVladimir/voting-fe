import { configureStore } from "@reduxjs/toolkit";

import { authApi } from "features/auth/api/authApi";
import { usersApi } from "features/adminPanel/api/usersApi";
import { restaurantsApi } from "features/adminPanel/api/restaurantsApi";

import { rootReducer } from "./rootReducer";

export const store = configureStore({
    reducer: {
        ...rootReducer,
        [authApi.reducerPath]: authApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
        [restaurantsApi.reducerPath]: restaurantsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(authApi.middleware)
            .concat(usersApi.middleware)
            .concat(restaurantsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
