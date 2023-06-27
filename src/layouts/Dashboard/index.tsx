import {
    AppBar,
    Box,
    CssBaseline,
    Divider,
    Drawer,
    Stack,
    Toolbar,
    Typography,
} from "@mui/material";

import { Outlet } from "react-router";

const drawerWidth = 240;

type DashboardProps = {
    title: string;
    drawerMenu?: JSX.Element;
    toolbarRight?: JSX.Element;
};

export const Dashboard = ({
    title,
    drawerMenu,
    toolbarRight,
}: DashboardProps) => (
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
                <Box display="flex" justifyContent="space-between" width="100%">
                    <Typography variant="h6" noWrap component="div">
                        {title}
                    </Typography>
                    {toolbarRight}
                </Box>
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
