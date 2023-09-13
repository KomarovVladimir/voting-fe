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
import { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "react-router";

import { Chat } from "features";

import {
    useAddItemMutation,
    useDeleteItemMutation,
    useLazyGetItemsQuery,
} from "./roomApi";
import { RoomAppBar } from "./RoomAppBar";

export const Room = () => {
    const { roomId } = useParams();
    const [getItems, { data: itemsData }] = useLazyGetItemsQuery();
    const [addItem] = useAddItemMutation();
    const [deleteItem] = useDeleteItemMutation();
    const [item, setItem] = useState("");

    useEffect(() => {
        if (roomId) {
            getItems(roomId);
        }
    }, [roomId, getItems]);

    const handleAddItem = () => {
        addItem({
            roomId,
            name: "New Item",
        });
    };

    const handleRemoveItem = (id: string) => () => {
        deleteItem(id);
    };

    const handleItemChange = (e: ChangeEvent<HTMLInputElement>) => {
        setItem(e.target.value);
    };

    return (
        <>
            <RoomAppBar />
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <List dense>
                        {itemsData?.items?.map(({ id, name, votes }) => (
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
