import { StrictMode } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "routes";
import "server";

import { store } from "./store";
import { AuthProvider } from "context/AuthProvider";

export const App = () => {
    return (
        <StrictMode>
            <AuthProvider>
                <Provider store={store}>
                    <BrowserRouter>
                        <AppRoutes />
                    </BrowserRouter>
                </Provider>
            </AuthProvider>
        </StrictMode>
    );
};
