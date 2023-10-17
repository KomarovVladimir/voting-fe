import { Button, Grid, Stack } from "@mui/material";
import { useState } from "react";

import { AppBar, PageWrapper, Title } from "components";
import { IUser } from "features/auth/types/types";
import { useAuth } from "features/auth";

import { CreationDialog } from "./CreationDialog";
import { RoomCard } from "./RoomCard";
import { useGetUserRoomsQuery } from "./roomsManagerApi";
import { JoiningDialog } from "./JoiningDialog";

//TODO: Move into a hook
//TODO: Rework the dialog logic
export const RoomsManager = () => {
    const {
        user: { id: userId },
    } = useAuth() as { user: IUser };
    const { data: rooms = [] } = useGetUserRoomsQuery(userId);
    const [creationOpen, setCreationOpen] = useState(false);
    const [joiningOpen, setJoiningOpen] = useState(false);

    const handleOpen = () => {
        setCreationOpen(true);
    };

    const handleClose = () => {
        setCreationOpen(false);
    };

    const handleJoiningOpen = () => {
        setJoiningOpen(true);
    };

    const handleJoiningClose = () => {
        setJoiningOpen(false);
    };

    return (
        <PageWrapper>
            <AppBar
                leftBlock={<Title>Rooms</Title>}
                menu={
                    <Stack gap={2} direction="row" mr={2} alignItems="center">
                        <Button sx={{ color: "#fff" }} onClick={handleOpen}>
                            + New Room
                        </Button>
                        <Button
                            sx={{ color: "#fff" }}
                            onClick={handleJoiningOpen}
                        >
                            Join
                        </Button>
                    </Stack>
                }
            />
            <JoiningDialog onClose={handleJoiningClose} open={joiningOpen} />
            <CreationDialog onClose={handleClose} open={creationOpen} />
            <Grid container spacing={2}>
                {rooms?.map(({ id, ...props }) => (
                    <Grid key={id} item xs={3}>
                        <RoomCard {...{ id, ...props }} />
                    </Grid>
                ))}
            </Grid>
        </PageWrapper>
    );
};
