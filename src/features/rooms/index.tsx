import { Button, Grid, Paper, Stack, Typography, styled } from "@mui/material";
import { useState } from "react";

import { RoomCreationDialog } from "./components/RoomCreationDialog";

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
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <RoomCreationDialog onClose={handleClose} {...{ open }} />
            <Stack direction="row" gap={5} alignItems="center" mb={4}>
                <Typography variant="h2">Rooms</Typography>
                <Button variant="contained" onClick={handleOpen}>
                    + New room
                </Button>
            </Stack>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Item>Restaurants</Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>Movies</Item>
                </Grid>
            </Grid>
        </>
    );
};
