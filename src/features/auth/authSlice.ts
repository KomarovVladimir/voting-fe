import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: {},
    userToken: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: {},
});
