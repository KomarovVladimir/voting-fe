import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

type Message = {
    userName: string;
    time: string;
    text: string;
};

type Chat = {
    [id: string]: Message;
};

//TODO: Remove the test data
const initialState = {
    [nanoid()]: {
        userName: "Roman Strekha",
        time: "10:45 am",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    [nanoid()]: {
        userName: "Martha Khyarm",
        time: "10:47 am",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    [nanoid()]: {
        userName: "Roman Strekha",
        time: "10:48 am",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
} as Chat;

export const chatSlice = createSlice({
    name: "Chat",
    initialState,
    reducers: {
        reset: () => initialState,
        addMessage(state, action: PayloadAction<Message>) {
            state[nanoid()] = action.payload;
        },
    },
});

export const { addMessage } = chatSlice.actions;

export const chatReducer = chatSlice.reducer;
