import { configureStore } from "@reduxjs/toolkit";

import { authApi, roomsApi, chatApi } from "features";
import { roomReducer, roomsManagerReducer, chatReducer } from "features";

export const store = configureStore({
    reducer: {
        roomsManager: roomsManagerReducer,
        room: roomReducer,
        chat: chatReducer,
        [authApi.reducerPath]: authApi.reducer,
        [roomsApi.reducerPath]: roomsApi.reducer,
        [chatApi.reducerPath]: chatApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            authApi.middleware,
            roomsApi.middleware,
            chatApi.middleware
        ),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
