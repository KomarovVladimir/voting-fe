import { Route, Routes } from "react-router";

import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./PrivateRoutes";

import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Home } from "../pages/Home";

export const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<PublicRoutes />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
        </Route>
        <Route path="protected" element={<PrivateRoutes />}></Route>
    </Routes>
);
