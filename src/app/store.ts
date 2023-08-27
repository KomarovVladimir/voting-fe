import { configureStore } from "@reduxjs/toolkit";

import { authApi, roomsManagerApi, roomApi, chatApi } from "features";
import { roomReducer, roomsManagerReducer } from "features";

export const store = configureStore({
    reducer: {
        roomsManager: roomsManagerReducer,
        room: roomReducer,
        [authApi.reducerPath]: authApi.reducer,
        [roomApi.reducerPath]: roomApi.reducer,
        [roomsManagerApi.reducerPath]: roomsManagerApi.reducer,
        [chatApi.reducerPath]: chatApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            authApi.middleware,
            roomApi.middleware,
            roomsManagerApi.middleware,
            chatApi.middleware
        ),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
