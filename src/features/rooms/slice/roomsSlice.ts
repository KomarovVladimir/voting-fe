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

export const roomsSlice = createSlice({
    name: "rooms",
    initialState,
    reducers: {
        reset: () => initialState,
        createRoom(state, action: PayloadAction<string>) {
            state[nanoid()] = { name: action.payload, status: "Pending" };
        },
        removeRoom(state, action: PayloadAction<string>) {
            delete state[action.payload];
        },
    },
});

export const { removeRoom, createRoom } = roomsSlice.actions;

export const roomsReducer = roomsSlice.reducer;
