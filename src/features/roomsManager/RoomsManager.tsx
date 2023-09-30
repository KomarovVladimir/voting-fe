import { Button, Grid, Stack } from "@mui/material";
import { useEffect, useState } from "react";

import { AppBar, PageWrapper } from "components";

import { ActionDialog } from "./ActionDialog";
import { joinRoom, createRoom } from "./roomsManagerSlice";
import { RoomCard } from "./RoomCard";
import { useCreateRoomMutation, useLazyGetRoomsQuery } from "./roomsManagerApi";

const dialogActions = {
    create: createRoom,
    join: joinRoom,
};

type Actions = keyof typeof dialogActions;

export const RoomsManager = () => {
    const [getRooms, { data: roomsData }] = useLazyGetRoomsQuery();
    const [open, setOpen] = useState(false);
    const [action, setAction] = useState<Actions>("create");
    const [createRoom] = useCreateRoomMutation();

    useEffect(() => {
        getRooms();
    }, [getRooms]);

    const handleOpen = (actionType: Actions) => () => {
        setOpen(true);
        setAction(actionType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <PageWrapper>
            <AppBar
                title="Rooms"
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
                {roomsData?.rooms?.map(({ id, name, status }) => (
                    <Grid key={id} item xs={3}>
                        <RoomCard {...{ id, name, status }} />
                    </Grid>
                ))}
            </Grid>
        </PageWrapper>
    );
};
