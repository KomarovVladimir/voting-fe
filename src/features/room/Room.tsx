import {
    Button,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemText,
    MenuItem,
    Snackbar,
    TextField,
    Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import { AppBar } from "components";
import { roomStatuses } from "common/constants";
import { Chat } from "features";

import { ParticipantsDialog } from "./ParticipantsDialog";
import {
    useAddItemMutation,
    useDeleteItemMutation,
    useLazyGetItemsQuery,
    useLazyGetRoomDataQuery,
    useUpdateRoomMutation,
} from "./roomApi";

export const Room = () => {
    const { roomId } = useParams();
    const [getItems, { data: itemsData }] = useLazyGetItemsQuery();
    const [getRoomData, { data: roomData }] = useLazyGetRoomDataQuery();
    const [addItem] = useAddItemMutation();
    const [deleteItem] = useDeleteItemMutation();
    const [updateRoom] = useUpdateRoomMutation();
    const [status, setStatus] = useState("");
    const [item, setItem] = useState("");
    const [open, setOpen] = useState(false);
    const [participantsOpen, setParticipantsOpen] = useState(false);

    useEffect(() => {
        if (roomId) {
            getItems(roomId);
            getRoomData(roomId);
        }
    }, [roomId, getItems, getRoomData]);

    useEffect(() => {
        if (roomData) {
            setStatus(roomData.room.status);
        }
    }, [status, roomData]);

    const handleParticipantsOpen = () => {
        setParticipantsOpen(true);
    };

    const handleParticipantsClose = () => {
        setParticipantsOpen(false);
    };

    const handleAddItem = () => {
        addItem({
            roomId,
            name: "New Item",
        });
    };

    const handleRemoveItem = (id: string) => () => {
        deleteItem(id);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        updateRoom({ id: roomId, status: e.target.value });
    };

    const handleItemChange = (e: ChangeEvent<HTMLInputElement>) => {
        setItem(e.target.value);
    };

    return (
        <>
            <ParticipantsDialog
                open={participantsOpen}
                onClose={handleParticipantsClose}
            />
            <Snackbar
                message="Copied to clipboard"
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "center",
                }}
                autoHideDuration={2000}
                onClose={handleClose}
                open={open}
            />
            <AppBar
                title={
                    <>
                        <Typography
                            variant="h6"
                            component={Link}
                            to="/authorized/rooms"
                            mr={2}
                        >
                            Rooms
                        </Typography>
                        <Typography variant="h6" component="span">
                            {roomData?.room?.name}
                        </Typography>
                    </>
                }
                menu={
                    <>
                        <TextField
                            select
                            value={status}
                            label="Status"
                            onChange={handleStatusChange}
                            sx={{ minWidth: 120 }}
                        >
                            {roomStatuses.map((item, index) => (
                                <MenuItem key={index} value={index}>
                                    {item}
                                </MenuItem>
                            ))}
                        </TextField>
                        <Button
                            sx={{ color: "#fff" }}
                            onClick={handleParticipantsOpen}
                        >
                            N participants
                        </Button>
                        <Button
                            onClick={handleOpen}
                            endIcon={<ContentCopyIcon />}
                            sx={{ color: "#fff" }}
                        >
                            #387645
                        </Button>
                    </>
                }
            />
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
