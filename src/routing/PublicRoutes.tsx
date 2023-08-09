import { Container } from "@mui/material";
import { useAuth } from "features/auth/hooks/useAuth";
import { Navigate, Outlet } from "react-router";

import { Link } from "react-router-dom";

export const PublicRoutes = () => {
    const { user } = useAuth();

    if (user) {
        return <Navigate to="authorized/rooms" />;
    }

    return (
        <Container maxWidth="xs">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="login">Login</Link>
                </li>
                <li>
                    <Link to="register">Register</Link>
                </li>
                <li>
                    <Link to="authorized/rooms">Rooms</Link>
                </li>
            </ul>

            <Outlet />
        </Container>
    );
};
