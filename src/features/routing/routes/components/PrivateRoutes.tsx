import { useContext } from "react";
import { Navigate, Outlet } from "react-router";

import { AuthContext } from "features/auth/context/AuthContext";

export const PrivateRoutes = () => {
    const { user } = useContext(AuthContext);

    if (!user) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
};
