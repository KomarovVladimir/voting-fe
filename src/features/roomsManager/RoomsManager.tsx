import { Box, Button, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { useState } from "react";

import { RootState } from "app/store";
import { AppBar } from "components";

import { ItemCreationDialog } from "./RoomCreationDialog";
import { createRoom } from "./roomsManagerSlice";
import { RoomCard } from "./RoomCard";

export const RoomsManager = () => {
    const rooms = useSelector(({ roomsManager }: RootState) => roomsManager);
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
                        <Grid key={id} item xs={3}>
                            <RoomCard {...{ id, name, status, endingDate }} />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    );
};
