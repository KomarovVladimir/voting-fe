import { Container } from "@mui/material";
import { Navigate, Outlet } from "react-router";
import { Link } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "features/auth/context/AuthContext";

export const PublicRoutes = () => {
    const { user } = useContext(AuthContext);

    if (user) {
        return <Navigate to="authorized/admin" />;
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
                    <Link to="protected/admin">Admin</Link>
                </li>
            </ul>

            <Outlet />
        </Container>
    );
};
