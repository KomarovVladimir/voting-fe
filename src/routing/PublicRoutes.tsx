import { Container } from "@mui/material";
import { Navigate, Outlet } from "react-router";

import { useAuth } from "features/auth/hooks/useAuth";

import { TestingMenu } from "./TestingMenu";

export const PublicRoutes = () => {
    const { user } = useAuth();

    if (user) {
        return <Navigate to="authorized/rooms" />;
    }

    return (
        <Container maxWidth="xs">
            <TestingMenu />

            <Outlet />
        </Container>
    );
};
