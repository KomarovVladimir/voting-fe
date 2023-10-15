import { Button, Grid, Stack } from "@mui/material";
import { useState } from "react";

import { AppBar, PageWrapper, Title } from "components";

import { CreationDialog } from "./CreationDialog";
import { RoomCard } from "./RoomCard";
import { useGetRoomsQuery } from "./roomsManagerApi";

//TODO: Move into a hook
//TODO: Rework the dialog logic
export const RoomsManager = () => {
    const { data: rooms } = useGetRoomsQuery();
    const [creationOpen, setCreationOpen] = useState(false);

    const handleOpen = () => {
        setCreationOpen(true);
    };

    const handleClose = () => {
        setCreationOpen(false);
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
                        <Button sx={{ color: "#fff" }}>Join</Button>
                    </Stack>
                }
            />
            <CreationDialog onClose={handleClose} open={creationOpen} />
            <Grid container spacing={2}>
                {rooms?.map(({ id, ownerId, name, status }) => (
                    <Grid key={id} item xs={3}>
                        <RoomCard {...{ id, ownerId, name, status }} />
                    </Grid>
                ))}
            </Grid>
        </PageWrapper>
    );
};
