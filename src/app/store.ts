import { configureStore } from "@reduxjs/toolkit";

import { authApi } from "services/api/authApi";

import { rootReducer } from "./rootReducer";

export const store = configureStore({
    reducer: { ...rootReducer, [authApi.reducerPath]: authApi.reducer },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
