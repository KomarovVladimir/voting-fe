import { Navigate, Outlet } from "react-router";

import { useAuth } from "features/auth/hooks/useAuth";

import { TestingMenu } from "./TestingMenu";

export const PrivateRoutes = () => {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/login" />;
    }

    return (
        <>
            <TestingMenu />
            <Outlet />
        </>
    );
};
