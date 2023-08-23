import { Button, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { useState } from "react";

import { RootState } from "app/store";
import { AppBar } from "components";

import { ActionDialog } from "./ActionDialog";
import { joinRoom, createRoom } from "./roomsManagerSlice";
import { RoomCard } from "./RoomCard";

const dialogActions = {
    create: createRoom,
    join: joinRoom,
};

type Actions = keyof typeof dialogActions;

export const RoomsManager = () => {
    const rooms = useSelector(({ roomsManager }: RootState) => roomsManager);
    const [open, setOpen] = useState(false);
    const [action, setAction] = useState<Actions>("create");

    const handleOpen = (actionType: Actions) => () => {
        setOpen(true);
        setAction(actionType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <AppBar
                title="Rooms"
                menu={
                    <>
                        <Button
                            sx={{ color: "#fff" }}
                            onClick={handleOpen("create")}
                        >
                            + New Room
                        </Button>
                        <Button
                            sx={{ color: "#fff" }}
                            onClick={handleOpen("join")}
                        >
                            Join
                        </Button>
                    </>
                }
            />
            <ActionDialog
                action={dialogActions[action]}
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
