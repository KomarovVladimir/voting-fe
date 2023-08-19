import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

type RoomItemData = { name: string; votes: number };

type Participant = { name: string };

type Room = {
    items: {
        [id: string]: RoomItemData;
    };
    participants: {
        [id: string]: Participant;
    };
};

//TODO: Remove the test data
const initialState = {
    items: {
        [nanoid()]: { name: "Item 1", votes: 12 },
        [nanoid()]: { name: "Item 2", votes: 12 },
        [nanoid()]: { name: "Item 3", votes: 12 },
        [nanoid()]: { name: "Item 4", votes: 12 },
    },
    participants: {
        [nanoid()]: { name: "Roman Strekha" },
        [nanoid()]: { name: "Matha Khyarm" },
    },
} as Room;

export const roomSlice = createSlice({
    name: "Room",
    initialState,
    reducers: {
        reset: () => initialState,
        addItem(state, action: PayloadAction<string>) {
            state.items[nanoid()] = { name: action.payload, votes: 0 };
        },
        removeItem(state, action: PayloadAction<string>) {
            delete state.items[action.payload];
        },
        addParticipant(state, action: PayloadAction<Participant>) {
            state.participants[nanoid()] = action.payload;
        },
        removeParticipant(state, action: PayloadAction<string>) {
            delete state.participants[action.payload];
        },
    },
});

export const { addItem, removeItem, addParticipant, removeParticipant } =
    roomSlice.actions;

export const roomReducer = roomSlice.reducer;
