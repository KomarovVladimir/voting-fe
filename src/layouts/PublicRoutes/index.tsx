import { Container } from "@mui/material";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

export const PublicRoutes = () => (
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
                <Link to="admin">Admin</Link>
            </li>
        </ul>

        <Outlet />
    </Container>
);
