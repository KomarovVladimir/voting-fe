import { configureStore } from "@reduxjs/toolkit";

import { authApi, roomsApi } from "features";
import { roomReducer, roomsManagerReducer, chatReducer } from "features";

export const store = configureStore({
    reducer: {
        roomsManager: roomsManagerReducer,
        room: roomReducer,
        chat: chatReducer,
        [authApi.reducerPath]: authApi.reducer,
        [roomsApi.reducerPath]: roomsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware, roomsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
