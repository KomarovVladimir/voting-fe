import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { io } from "socket.io-client";

// import "services/server";
import { AuthProvider } from "features";
import { AppRoutes } from "routing";

import { store } from "./store";

//TODO: Move sockets io
const socket = io("http://localhost:5000");

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

//TODO: Migrate to vite
export const App = () => {
    return (
        <StrictMode>
            <AuthProvider>
                <Provider store={store}>
                    <ThemeProvider theme={darkTheme}>
                        <CssBaseline />
                        <BrowserRouter>
                            <AppRoutes />
                        </BrowserRouter>
                    </ThemeProvider>
                </Provider>
            </AuthProvider>
        </StrictMode>
    );
};
