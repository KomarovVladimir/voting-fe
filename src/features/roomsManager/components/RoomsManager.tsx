import { Avatar, Grid, List } from "@mui/material";

import { ListItem } from "components";

import { CreationDialog } from "./CreationDialog";

import { useRoomsManager } from "../hooks";

export const RoomsManager = () => {
    const { rooms, creationOpen, handleOpen, handleClose } = useRoomsManager();

    return (
        <List>
            <CreationDialog onClose={handleClose} open={creationOpen} />
            <Grid container spacing={2}>
                {rooms?.map((props, index) => (
                    <ListItem
                        key={index}
                        icon={<Avatar>{index.toString()}</Avatar>}
                    />
                ))}
                <ListItem icon={<Avatar>+</Avatar>} onClick={handleOpen} />
            </Grid>
        </List>
    );
};
