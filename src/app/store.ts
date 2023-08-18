import { configureStore } from "@reduxjs/toolkit";

import { authApi } from "features/auth/api/authApi";
import { roomReducer, roomsManagerReducer } from "features";

export const store = configureStore({
    reducer: {
        roomsManager: roomsManagerReducer,
        room: roomReducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
