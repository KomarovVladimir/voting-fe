import {
    Button,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemText,
    TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { Chat } from "features";

import { useRoom } from "./useRoom";

import { RoomAppBar } from "../RoomAppBar";

export const Room = () => {
    const { item, items, handleAddItem, handleRemoveItem, handleItemChange } =
        useRoom();

    return (
        <>
            <RoomAppBar />
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <List dense>
                        {items?.map(({ id, name, votes }) => (
                            <ListItem
                                key={id}
                                secondaryAction={
                                    <IconButton
                                        edge="end"
                                        aria-label="delete"
                                        onClick={handleRemoveItem(id)}
                                    >
                                        <CloseIcon />
                                    </IconButton>
                                }
                            >
                                <ListItemText
                                    primary={name}
                                    secondary={votes}
                                />
                            </ListItem>
                        ))}
                    </List>
                    <TextField
                        label="Add item*"
                        type="text"
                        value={item}
                        onChange={handleItemChange}
                    />
                    <Button variant="contained" onClick={handleAddItem}>
                        Add Item
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Chat />
                </Grid>
            </Grid>
        </>
    );
};
