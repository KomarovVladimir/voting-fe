import {
    AppBar,
    Box,
    CssBaseline,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
} from "@mui/material";

import Person2Icon from "@mui/icons-material/Person2";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import PeopleIcon from "@mui/icons-material/People";
import { Outlet } from "react-router";

const drawerWidth = 240;

type DashboardProps = {};

export const Dashboard = () => (
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
                    Title
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
            <List>
                {["Restaurants", "Users"].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? (
                                    <RestaurantIcon />
                                ) : (
                                    <PeopleIcon />
                                )}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {["Profile"].map((text) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Person2Icon />
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
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
