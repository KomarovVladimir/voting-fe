import { Route, Routes } from "react-router";

import { Register, Login, RoomsPage, VotingPage } from "pages";

import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { navigation } from "./data/navigation";

export const AppRoutes = () => (
    <Routes>
        <Route path={navigation.baseRoute} element={<PublicRoutes />}>
            <Route index element={<Login />} />
            <Route path={navigation.register} element={<Register />} />
        </Route>
        <Route path={navigation.authorized} element={<PrivateRoutes />}>
            <Route path={navigation.rooms} element={<RoomsPage />} />
            <Route path={navigation.voting} element={<VotingPage />} />
        </Route>
    </Routes>
);
