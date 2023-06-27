import { Button, ButtonProps } from "@mui/material";

import { useAuth } from "../hooks/useAuth";

export const LogoutButton = (props: ButtonProps) => {
    const { handleLogout } = useAuth();

    return (
        <Button onClick={handleLogout} {...props}>
            Logout
        </Button>
    );
};
