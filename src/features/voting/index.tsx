import {
    Box,
    Button,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Stack,
    Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { useState } from "react";

import { RootState } from "app/store";
import { ItemCreationDialog } from "features/rooms/RoomCreationDialog";
import { AppBar } from "components";

import { addItem } from "./slice/votingSlice";
import { Link } from "react-router-dom";

export const Voting = () => {
    const { votingId } = useParams();

    const items = useSelector(({ voting }: RootState) => voting);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <ItemCreationDialog
                submitAction={addItem}
                onClose={handleClose}
                {...{ open }}
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
                            Voting: {votingId}
                        </Typography>
                    </>
                }
                menu={
                    <Box>
                        <Button sx={{ color: "#fff" }} onClick={handleOpen}>
                            + New Room
                        </Button>
                        <Button sx={{ color: "#fff" }}>Join</Button>
                    </Box>
                }
            />
            <Stack direction="row" gap={5} alignItems="center" mb={4}>
                <Typography variant="h2">Voting Name</Typography>
                <Button variant="contained" onClick={handleOpen}>
                    + New item
                </Button>
            </Stack>
            <List dense>
                {Object.values(items).map(({ name, votes }) => (
                    <ListItem
                        secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        }
                    >
                        <ListItemText primary={name} />{" "}
                        <ListItemText primary={votes} />
                    </ListItem>
                ))}
            </List>
        </>
    );
};
