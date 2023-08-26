import { Button, Grid } from "@mui/material";
import { useState } from "react";

import { AppBar } from "components";

import { ActionDialog } from "./ActionDialog";
import { joinRoom, createRoom } from "./roomsManagerSlice";
import { RoomCard } from "./RoomCard";
import { useCreateRoomMutation, useGetRoomsQuery } from "./roomsManagerApi";

const dialogActions = {
    create: createRoom,
    join: joinRoom,
};

type Actions = keyof typeof dialogActions;

export const RoomsManager = () => {
    const { data } = useGetRoomsQuery();
    const [open, setOpen] = useState(false);
    const [action, setAction] = useState<Actions>("create");
    const [createRoom] = useCreateRoomMutation();

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
                action={createRoom}
                onClose={handleClose}
                {...{ open }}
            />
            <Grid container spacing={2}>
                {data?.rooms.map(({ id, name }) => (
                    <Grid key={id} item xs={3}>
                        <RoomCard {...{ id, name }} />
                    </Grid>
                ))}
            </Grid>
        </>
    );
};
