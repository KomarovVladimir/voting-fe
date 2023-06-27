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
import { useDispatch } from "react-redux";

import { setCurrentPage } from "../slice/adminPanelSlice";
import { pages } from "../data/pages";

//TODO: Make the component shared
export const DrawerMenu = () => {
    const dispatch = useDispatch();

    const handleItemClick = (page: string) => () => {
        dispatch(setCurrentPage(page));
    };

    return (
        <>
            <List>
                {["Restaurants", "Users"].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton
                            component={Link}
                            to={text.toLocaleLowerCase()}
                            onClick={handleItemClick(pages.restaurants)}
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
};
