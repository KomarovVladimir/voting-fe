import { Route, Routes } from "react-router";

import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { RegistrationForm, LoginForm, RoomsManager, Room } from "features";
import { navigation } from "./data/navigation";

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
