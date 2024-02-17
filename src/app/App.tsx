import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React, { StrictMode } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
// import { io } from "socket.io-client";

// import "services/server";
import { AppRoutes } from "routing";

import { store } from "./store";

//TODO: Move sockets io
// const socket = io("http://localhost:5000", { withCredentials: true });

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

export const App = () => {
    return (
        <StrictMode>
            <Provider store={store}>
                <ThemeProvider theme={darkTheme}>
                    <CssBaseline />
                    <BrowserRouter>
                        <AppRoutes />
                    </BrowserRouter>
                </ThemeProvider>
            </Provider>
        </StrictMode>
    );
};
