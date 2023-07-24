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
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setCurrentPage } from "../slice/adminPanelSlice";
import { pages } from "../data/pages";

//TODO: Make the component shared
export const DrawerMenu = () => {
    const dispatch = useDispatch();

    const { voting, users, profile } = pages;

    const handleItemClick = (page: string) => () => {
        dispatch(setCurrentPage(page));
    };

    return (
        <>
            <ListItem disablePadding>
                <ListItemButton
                    component={Link}
                    to={voting.toLocaleLowerCase()}
                    onClick={handleItemClick(voting)}
                >
                    <ListItemIcon>
                        <ThumbUpIcon />
                    </ListItemIcon>
                    <ListItemText primary={voting} />
                </ListItemButton>
            </ListItem>
            <List>
                <ListItem disablePadding>
                    <ListItemButton
                        component={Link}
                        to={users.toLocaleLowerCase()}
                        onClick={handleItemClick(users)}
                    >
                        <ListItemIcon>
                            <PeopleIcon />
                        </ListItemIcon>
                        <ListItemText primary={users} />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton
                        component={Link}
                        to={profile.toLocaleLowerCase()}
                        onClick={handleItemClick(profile)}
                    >
                        <ListItemIcon>
                            <Person2Icon />
                        </ListItemIcon>
                        <ListItemText primary={profile} />
                    </ListItemButton>
                </ListItem>
            </List>
        </>
    );
};
