import {
    Box,
    Button,
    Checkbox,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListSubheader,
} from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import DeleteIcon from "@mui/icons-material/Delete";

import { useState } from "react";

// import { useGetUsersListQuery } from "../api/usersApi";

export const RestaurantsList = () => {
    //TODO: Change to restaurants
    // const { data: { users: rows = [] } = {}, isLoading } =
    //     useGetUsersListQuery();

    const [checked, setChecked] = useState([0]);

    const handleToggle = (value: number) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <List
            sx={{
                bgcolor: "background.paper",
            }}
        >
            <ListSubheader>
                <Button>Add</Button>
                <Button color="error">Delete</Button>
            </ListSubheader>
            {[
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                18, 19, 20,
            ].map((value) => {
                const labelId = `checkbox-list-label-${value}`;

                return (
                    <ListItem
                        key={value}
                        secondaryAction={
                            <>
                                <IconButton edge="end" aria-label="comments">
                                    <MenuBookIcon />
                                </IconButton>
                                <IconButton edge="end" aria-label="comments">
                                    <DeleteIcon />
                                </IconButton>
                            </>
                        }
                        disablePadding
                    >
                        <ListItemButton
                            role={undefined}
                            onClick={handleToggle(value)}
                            dense
                        >
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={checked.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{
                                        "aria-labelledby": labelId,
                                    }}
                                />
                            </ListItemIcon>
                            <ListItemText
                                id={labelId}
                                primary={`Restaurant ${value + 1}`}
                            />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );
};
