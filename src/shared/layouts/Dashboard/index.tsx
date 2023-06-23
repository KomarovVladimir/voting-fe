import {
    AppBar,
    Box,
    CssBaseline,
    Divider,
    Drawer,
    Toolbar,
    Typography,
} from "@mui/material";

import { Outlet } from "react-router";

const drawerWidth = 240;

type DashboardProps = {
    title: string;
    drawerMenu?: JSX.Element;
};

export const Dashboard = ({ title, drawerMenu }: DashboardProps) => (
    <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
            position="fixed"
            sx={{
                width: `calc(100% - ${drawerWidth}px)`,
                ml: `${drawerWidth}px`,
            }}
        >
            <Toolbar>
                <Typography variant="h6" noWrap component="div">
                    {title}
                </Typography>
            </Toolbar>
        </AppBar>
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: drawerWidth,
                    boxSizing: "border-box",
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <Toolbar />
            <Divider />
            {drawerMenu}
        </Drawer>
        <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
            <Toolbar />
            <Outlet />
        </Box>
    </Box>
);
