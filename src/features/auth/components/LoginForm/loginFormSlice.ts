import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: {},
    userToken: null,
};

export const loginFormSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: {},
});
