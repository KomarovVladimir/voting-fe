import { StrictMode } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import "services/server";

import { store } from "./store";
import { AuthProvider } from "features/auth/context/AuthProvider";
import { AppRoutes } from "features/routing";

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
