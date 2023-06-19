import { Route, Routes } from "react-router";

import {
    AdminPanel,
    Login,
    Register,
    Home,
    Restaurants,
    Users,
    Profile,
} from "pages";
import { PublicRoutes } from "layouts";
import { navigation } from "data/navigation";

export const AppRoutes = () => (
    <Routes>
        <Route path={navigation.public} element={<PublicRoutes />}>
            <Route index element={<Home />} />
            <Route path={navigation.login} element={<Login />} />
            <Route path={navigation.register} element={<Register />} />
        </Route>
        <Route path={navigation.admin} element={<AdminPanel />}>
            <Route path={navigation.restaurants} element={<Restaurants />} />
            <Route path={navigation.users} element={<Users />} />
            <Route path={navigation.profile} element={<Profile />} />
        </Route>
    </Routes>
);
