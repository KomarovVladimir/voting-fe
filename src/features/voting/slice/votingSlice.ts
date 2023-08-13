import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

type VotingItemData = { name: string; votes: number };

type Voting = {
    [id: string]: VotingItemData;
};

//TODO: Remove the test data
const initialState = {
    [nanoid()]: { name: "Item 1", votes: 12 },
    [nanoid()]: { name: "Item 2", votes: 12 },
    [nanoid()]: { name: "Item 3", votes: 12 },
    [nanoid()]: { name: "Item 4", votes: 12 },
} as Voting;

export const VotingSlice = createSlice({
    name: "Voting",
    initialState,
    reducers: {
        reset: () => initialState,
        addItem(state, action: PayloadAction<string>) {
            state[nanoid()] = { name: action.payload, votes: 0 };
        },
        removeItem(state, action: PayloadAction<string>) {
            delete state[action.payload];
        },
    },
});

export const { addItem, removeItem } = VotingSlice.actions;

export const votingReducer = VotingSlice.reducer;
