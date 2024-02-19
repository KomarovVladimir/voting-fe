import { Button, Grid, Stack } from "@mui/material";

import { AppBar, PageWrapper, Title } from "components";

import { CreationDialog } from "./CreationDialog";
import { RoomCard } from "./RoomCard";
import { JoiningDialog } from "./JoiningDialog";

import { useRoomsManager } from "../hooks";

export const RoomsManager = () => {
    const {
        rooms,
        creationOpen,
        joiningOpen,
        handleOpen,
        handleClose,
        handleJoiningOpen,
        handleJoiningClose
    } = useRoomsManager();

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
                {rooms?.map((props, index) => (
                    <Grid key={index} item xs={3}>
                        <RoomCard {...props} />
                    </Grid>
                ))}
            </Grid>
        </PageWrapper>
    );
};
