import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { AuthProvider } from "features/auth/context/AuthProvider";
import "services/server";
import { AppRoutes } from "routing";

import { store } from "./store";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

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
