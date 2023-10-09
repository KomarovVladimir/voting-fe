import { Button, Grid, Stack } from "@mui/material";
import { useState } from "react";

import { AppBar, PageWrapper, Title } from "components";

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
    const { data: rooms } = useGetRoomsQuery();
    const [open, setOpen] = useState(false);
    const [createRoom] = useCreateRoomMutation();
    const handleOpen = (actionType: Actions) => () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <PageWrapper>
            <AppBar
                leftBlock={<Title>Rooms</Title>}
                menu={
                    <Stack gap={2} direction="row" mr={2} alignItems="center">
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
                    </Stack>
                }
            />
            <ActionDialog
                action={createRoom}
                onClose={handleClose}
                {...{ open }}
            />
            <Grid container spacing={2}>
                {rooms?.map(({ id, name, status }) => (
                    <Grid key={id} item xs={3}>
                        <RoomCard {...{ id, name, status }} />
                    </Grid>
                ))}
            </Grid>
        </PageWrapper>
    );
};
