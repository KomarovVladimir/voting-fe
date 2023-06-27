import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { pages } from "../data/pages";

interface AdminPaneState {
    currentPage: string;
}

const initialState = { currentPage: pages.dashboard } as AdminPaneState;

export const adminPanelSlice = createSlice({
    name: "adminPanel",
    initialState,
    reducers: {
        setCurrentPage(state, action: PayloadAction<string>) {
            state.currentPage = action.payload;
        },
    },
});

export const { setCurrentPage } = adminPanelSlice.actions;

export const adminPanelReducer = adminPanelSlice.reducer;
