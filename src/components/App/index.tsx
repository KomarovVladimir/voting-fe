import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "../../routes/AppRoutes";

export const App = () => (
    <StrictMode>
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    </StrictMode>
);
