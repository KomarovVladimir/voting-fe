import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

interface IRooms {
    [id: string]: string;
}

//TODO: Remove the test data
const initialState = {
    [nanoid()]: "Movies",
    [nanoid()]: "Restaurants",
} as IRooms;

export const roomsSlice = createSlice({
    name: "rooms",
    initialState,
    reducers: {
        reset: () => initialState,
        addRoom(state, action: PayloadAction<string>) {
            state[nanoid()] = action.payload;
        },
        removeRoom(state, action: PayloadAction<string>) {
            delete state[action.payload];
        },
    },
});

export const { removeRoom, addRoom } = roomsSlice.actions;

export const roomsReducer = roomsSlice.reducer;
