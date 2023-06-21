import { StrictMode } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "routes";
import "server";

import { store } from "./store";

export const App = () => (
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </Provider>
    </StrictMode>
);
