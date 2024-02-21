import { Grid, List } from "@mui/material";

import { Avatar, ListItem } from "components";

import { CreationDialog } from "./CreationDialog";
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
        <List>
            <JoiningDialog onClose={handleJoiningClose} open={joiningOpen} />
            <CreationDialog onClose={handleClose} open={creationOpen} />
            <Grid container spacing={2}>
                {rooms?.map((props, index) => (
                    <ListItem
                        key={index}
                        icon={<Avatar avatarText={index.toString()} />}
                    />
                ))}
                <ListItem
                    icon={<Avatar avatarText="+" />}
                    onClick={handleOpen}
                />
            </Grid>
        </List>
    );
};
