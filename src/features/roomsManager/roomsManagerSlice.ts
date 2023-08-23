import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

type Rooms = {
    [id: string]: { name: string; status: string; endingDate?: string };
};

//TODO: Remove the test data
const initialState = {
    [nanoid()]: { name: "Movies", status: "Active", endingDate: "27.07.1996" },
    [nanoid()]: {
        name: "Restaurants",
        status: "Active",
    },
} as Rooms;

export const roomsManagerSlice = createSlice({
    name: "rooms",
    initialState,
    reducers: {
        reset: () => initialState,
        createRoom(state, action: PayloadAction<string>) {
            state[nanoid()] = { name: action.payload, status: "Pending" };
        },
        joinRoom(state, action: PayloadAction<string>) {
            state[nanoid()] = { name: action.payload, status: "Test" };
        },
        removeRoom(state, action: PayloadAction<string>) {
            delete state[action.payload];
        },
    },
});

export const { joinRoom, removeRoom, createRoom } = roomsManagerSlice.actions;

export const roomsManagerReducer = roomsManagerSlice.reducer;
