import {
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

import { RootState } from "app/store";
import { ItemCreationDialog } from "features/rooms/RoomCreationDialog";
import { useState } from "react";
import { addItem } from "./slice/votingSlice";

export const Voting = () => {
    const { votingId } = useParams();
    console.log(votingId);

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
