import { Grid, IconButton, List, ListItemText } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { Chat } from "features";
import { PageWrapper } from "components";

import { useRoom } from "./useRoom";
import { ListItem } from "./styled";

import { RoomAppBar } from "../RoomAppBar";
import { ItemInput } from "../ItemInput";

export const Room = () => {
    const { items, handleRemoveItem } = useRoom();

    return (
        <PageWrapper>
            <RoomAppBar />
            <Grid
                container
                spacing={2}
                rowSpacing="0"
                sx={{ height: "calc(100vh - 10rem)" }}
            >
                <Grid item xs={6}>
                    <List dense disablePadding>
                        {items?.map(({ id, name, votes }) => (
                            <ListItem
                                key={id}
                                secondaryAction={
                                    <IconButton
                                        edge="end"
                                        aria-label="delete"
                                        onClick={handleRemoveItem(id)}
                                    >
                                        <CloseIcon />
                                    </IconButton>
                                }
                            >
                                <ListItemText
                                    primary={name}
                                    secondary={votes}
                                />
                            </ListItem>
                        ))}
                    </List>
                    {items && items.length < 10 && <ItemInput />}
                </Grid>
                <Grid item xs={6} sx={{ height: "100%" }}>
                    <Chat />
                </Grid>
            </Grid>
        </PageWrapper>
    );
};
