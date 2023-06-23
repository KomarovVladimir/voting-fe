import { Navigate, Outlet } from "react-router";

import { useAuth } from "features/auth/useAuth";

export const PrivateRoutes = () => {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
};
