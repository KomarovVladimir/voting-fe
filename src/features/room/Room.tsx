import {
    Button,
    Divider,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemText,
    MenuItem,
    Paper,
    Snackbar,
    TextField,
    Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import CloseIcon from "@mui/icons-material/Close";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";

import { RootState } from "app/store";
import { AppBar } from "components";

import { addItem, removeItem } from "./roomSlice";
import { useDispatch } from "react-redux";

const statuses = ["Active", "Pending", "Completed"];

export const Room = () => {
    const dispatch = useDispatch();
    const { roomId } = useParams();
    const [status, setStatus] = useState("");
    const [open, setOpen] = useState(false);

    const items = useSelector(({ room }: RootState) => room);

    const handleAddItem = () => {
        dispatch(addItem("test"));
    };

    const handleRemoveItem = (id: string) => () => {
        dispatch(removeItem(id));
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.target.value as string);
    };
    return (
        <>
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
                            Room: {roomId}
                        </Typography>
                    </>
                }
                menu={
                    <>
                        <TextField
                            select
                            value={status}
                            label="Status"
                            onChange={handleChange}
                            sx={{ minWidth: 120 }}
                        >
                            {statuses.map((item, index) => (
                                <MenuItem value={index}>{item}</MenuItem>
                            ))}
                        </TextField>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker label="Ends at" />
                        </LocalizationProvider>
                        <Button sx={{ color: "#fff" }}>N participants</Button>
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
                        {Object.entries(items).map(([id, { name, votes }]) => (
                            <>
                                <ListItem
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
                                <Divider variant="inset" component="li" />
                            </>
                        ))}
                    </List>
                    <Button variant="contained" onClick={handleAddItem}>
                        Add Item
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Paper
                        sx={{
                            height: "100%",
                            padding: 2,
                        }}
                    >
                        Chat window
                    </Paper>
                </Grid>
            </Grid>
        </>
    );
};
