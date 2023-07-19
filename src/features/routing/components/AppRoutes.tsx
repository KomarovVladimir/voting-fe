import { Route, Routes } from "react-router";

import {
    Register,
    Home,
    Login,
    Admin,
    Profile,
    Restaurants,
    Users,
    Voting,
} from "pages";

import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

import { navigation } from "../data/navigation";

export const AppRoutes = () => (
    <Routes>
        <Route path={navigation.baseRoute} element={<PublicRoutes />}>
            <Route index element={<Home />} />
            <Route path={navigation.login} element={<Login />} />
            <Route path={navigation.register} element={<Register />} />
        </Route>
        <Route path={navigation.authorized} element={<PrivateRoutes />}>
            <Route path={navigation.admin} element={<Admin />}>
                <Route path={navigation.voting} element={<Voting />} />
                <Route
                    path={navigation.restaurants}
                    element={<Restaurants />}
                />
                <Route path={navigation.users} element={<Users />} />
                <Route path={navigation.profile} element={<Profile />} />
            </Route>
        </Route>
    </Routes>
);
