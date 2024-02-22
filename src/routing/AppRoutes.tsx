import { Route, Routes } from "react-router";

import { RegistrationForm, LoginForm } from "features";
import { ChatPage } from "pages";

import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

import { navigation } from "../common/constants";

const { baseRoute, authorized, register } = navigation;

export const AppRoutes = () => (
    <Routes>
        <Route path={baseRoute} element={<PublicRoutes />}>
            <Route index element={<LoginForm />} />
            <Route path={register} element={<RegistrationForm />} />
        </Route>
        <Route path={authorized} element={<PrivateRoutes />}>
            <Route index element={<ChatPage />} />
        </Route>
    </Routes>
);
