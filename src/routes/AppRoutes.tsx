import { Route, Routes } from "react-router";
import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./PrivateRoutes";

export const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<PublicRoutes />}></Route>
        <Route path="protected" element={<PrivateRoutes />}></Route>
    </Routes>
);
