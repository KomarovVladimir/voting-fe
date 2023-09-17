import { CssBaseline } from "@mui/material";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { AuthProvider } from "features/auth/context/AuthProvider";
import "services/server";
import { AppRoutes } from "routing";

import { store } from "./store";

export const App = () => {
    return (
        <StrictMode>
            <AuthProvider>
                <Provider store={store}>
                    <BrowserRouter>
                        <CssBaseline />
                        <AppRoutes />
                    </BrowserRouter>
                </Provider>
            </AuthProvider>
        </StrictMode>
    );
};
