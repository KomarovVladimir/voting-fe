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
    Typography,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";

import { useState } from "react";

// import { useGetUsersListQuery } from "../api/usersApi";

export const VotingList = () => {
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
            {[0, 1, 2, 3].map((value) => {
                const labelId = `checkbox-list-label-${value}`;

                return (
                    <ListItem
                        key={value}
                        secondaryAction={
                            <IconButton edge="end" aria-label="comments">
                                <ClearIcon />
                            </IconButton>
                        }
                    >
                        <ListItemText
                            id={labelId}
                            primary={`Restaurant ${value + 1}`}
                        />
                        <FavoriteIcon fontSize="small" />
                        <Typography variant="body1">{`${
                            value + 20
                        }`}</Typography>
                    </ListItem>
                );
            })}
        </List>
    );
};
