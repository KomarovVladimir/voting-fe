import { AccountCircle } from "@mui/icons-material";
import {
    AppBar as MuiAppBar,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    MenuItem,
    Avatar,
} from "@mui/material";
import { ReactNode, useState } from "react";

import { useAuth } from "features/auth/hooks/useAuth";

export type AppBarProps = { title: ReactNode; menu?: ReactNode };

export const AppBar = ({ title, menu }: AppBarProps) => {
    const { user, handleLogout } = useAuth();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <MuiAppBar
            position="static"
            sx={{
                mb: 3,
                background: "transparent",
                boxShadow: "none",
            }}
        >
            <Toolbar disableGutters>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {title}
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
                            <Avatar
                                alt={user?.email}
                                src={user?.avatar}
                                sx={{
                                    width: "2.5rem",
                                    height: "2.5rem",
                                }}
                            />
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
