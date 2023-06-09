import { Route, Routes } from "react-router";

import { Login, Register, Home, Restaurants, Users, Profile } from "pages";
import { PublicRoutes, Dashboard } from "layouts";

export const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<PublicRoutes />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
        </Route>
        <Route path="admin" element={<Dashboard title="Admin panel" />}>
            <Route path="restaurants" element={<Restaurants />} />
            <Route path="users" element={<Users />} />
            <Route path="profile" element={<Profile />} />
        </Route>
    </Routes>
);
