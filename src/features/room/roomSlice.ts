import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

type RoomItemData = { name: string; votes: number };

type Room = {
    [id: string]: RoomItemData;
};

//TODO: Remove the test data
const initialState = {
    [nanoid()]: { name: "Item 1", votes: 12 },
    [nanoid()]: { name: "Item 2", votes: 12 },
    [nanoid()]: { name: "Item 3", votes: 12 },
    [nanoid()]: { name: "Item 4", votes: 12 },
} as Room;

export const roomSlice = createSlice({
    name: "Room",
    initialState,
    reducers: {
        reset: () => initialState,
        addItem(state, action: PayloadAction<string>) {
            state[nanoid()] = { name: action.payload, votes: 0 };
        },
        removeItem(state, action: PayloadAction<string>) {
            delete state[action.payload];
        },
        addMessage(state, action: PayloadAction<string>) {
            state[nanoid()] = { name: action.payload, votes: 0 };
        },
    },
});

export const { addItem, removeItem } = roomSlice.actions;

export const roomReducer = roomSlice.reducer;
