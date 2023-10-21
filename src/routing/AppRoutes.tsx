import { Route, Routes } from "react-router";

import { RegistrationForm, LoginForm, Room, RoomsManager } from "features";

import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

import { navigation } from "../common/constants";

const { baseRoute, authorized, roomsManager, room, register } = navigation;

export const AppRoutes = () => (
    <Routes>
        <Route path={baseRoute} element={<PublicRoutes />}>
            <Route index element={<LoginForm />} />
            <Route path={register} element={<RegistrationForm />} />
        </Route>
        <Route path={authorized} element={<PrivateRoutes />}>
            <Route path={roomsManager} element={<RoomsManager />} />
            <Route path={room} element={<Room />} />
        </Route>
    </Routes>
);
