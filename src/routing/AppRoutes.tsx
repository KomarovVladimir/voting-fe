import { Route, Routes } from "react-router";

import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { navigation } from "./data/navigation";
import { RegistrationForm, LoginForm, RoomsManager, Room } from "features";

export const AppRoutes = () => (
    <Routes>
        <Route path={navigation.baseRoute} element={<PublicRoutes />}>
            <Route index element={<LoginForm />} />
            <Route path={navigation.register} element={<RegistrationForm />} />
        </Route>
        <Route path={navigation.authorized} element={<PrivateRoutes />}>
            <Route path={navigation.rooms} element={<RoomsManager />} />
            <Route path={navigation.room} element={<Room />} />
        </Route>
    </Routes>
);
