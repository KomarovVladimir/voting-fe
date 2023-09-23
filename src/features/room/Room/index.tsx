import { Grid, IconButton, List, ListItem, ListItemText } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { Chat } from "features";
import { PageWrapper } from "components";

import { useRoom } from "./useRoom";

import { RoomAppBar } from "../RoomAppBar";
import { ItemInput } from "../ItemInput";

//TODO: Move the styles
export const Room = () => {
    const { items, handleRemoveItem } = useRoom();

    return (
        <PageWrapper>
            <RoomAppBar />
            <Grid container spacing={2} rowSpacing="0" height="100%">
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
                                sx={{
                                    borderRadius: ".5rem",
                                    mb: "1rem",
                                    border: " 1px solid #383c47",
                                    background: "rgba(203, 227, 255, 0.10)",
                                    boxShadow:
                                        "8px 16px 24px 0px rgba(0, 0, 0, 0.16)",
                                    backdropFilter: "blur(8px)",
                                }}
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
