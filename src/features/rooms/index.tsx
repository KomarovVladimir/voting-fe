import { Box, Button, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { useState } from "react";

import { RootState } from "app/store";
import { ItemCreationDialog } from "components/ItemCreationDialog";
import { AppBar } from "components";

import { createRoom } from "./slice/roomsSlice";
import { RoomCard } from "./RoomCard";

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
                submitAction={createRoom}
                onClose={handleClose}
                {...{ open }}
            />
            <Grid container spacing={2}>
                {Object.entries(rooms).map(
                    ([id, { name, status, endingDate }]) => (
                        <Grid item xs={3}>
                            <RoomCard {...{ id, name, status, endingDate }} />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    );
};
