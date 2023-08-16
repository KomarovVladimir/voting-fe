import { AccountCircle } from "@mui/icons-material";
import {
    AppBar as MuiAppBar,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    MenuItem,
} from "@mui/material";
import { ReactNode, useState } from "react";

import { useAuth } from "features/auth/hooks/useAuth";

export type AppBarProps = { menu?: ReactNode };

export const AppBar = ({ menu }: AppBarProps) => {
    const { user, handleLogout } = useAuth();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <MuiAppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Page name
                </Typography>
                {user && (
                    <>
                        {menu}
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>
                                My account
                            </MenuItem>
                            <MenuItem onClick={handleLogout}>Logout</MenuItem>
                        </Menu>
                    </>
                )}
            </Toolbar>
        </MuiAppBar>
    );
};
