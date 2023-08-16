import {
    Box,
    Button,
    Grid,
    Paper,
    Stack,
    Typography,
    styled,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useState } from "react";

import { RootState } from "app/store";

import { ItemCreationDialog } from "components/ItemCreationDialog";
import { addRoom } from "./slice/roomsSlice";
import { AppBar } from "components";

const Item = styled(Paper)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.h4,
    height: 256,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

export const Rooms = () => {
    const rooms = useSelector(({ rooms }: RootState) => rooms);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <AppBar
                title="Rooms"
                menu={
                    <Box>
                        <Button sx={{ color: "#fff" }} onClick={handleOpen}>
                            + New Room
                        </Button>
                        <Button sx={{ color: "#fff" }}>Join</Button>
                    </Box>
                }
            />
            <ItemCreationDialog
                submitAction={addRoom}
                onClose={handleClose}
                {...{ open }}
            />
            <Grid container spacing={2}>
                {Object.values(rooms).map((name) => (
                    <Grid item xs={3}>
                        <Item>{name}</Item>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};
