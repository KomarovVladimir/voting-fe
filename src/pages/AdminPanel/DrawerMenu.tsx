import {
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Divider,
} from "@mui/material";
import Person2Icon from "@mui/icons-material/Person2";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import PeopleIcon from "@mui/icons-material/People";
import { Link } from "react-router-dom";

export const DrawerMenu = () => (
    <>
        <List>
            {["Restaurants", "Users"].map((text, index) => (
                <ListItem key={text} disablePadding>
                    <ListItemButton
                        component={Link}
                        to={text.toLocaleLowerCase()}
                    >
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
                    <ListItemButton
                        component={Link}
                        to={text.toLocaleLowerCase()}
                    >
                        <ListItemIcon>
                            <Person2Icon />
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    </>
);
