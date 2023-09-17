import {
    Button,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemText,
    TextField,
    styled,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { Chat } from "features";

import { useRoom } from "./useRoom";

import { RoomAppBar } from "../RoomAppBar";

const RoomWrapper = styled("div")({
    paddingLeft: "2rem",
    paddingRight: "2rem",
});

export const Room = () => {
    const {
        item,
        items,
        handleAddItem,
        handleKeyUp,
        handleRemoveItem,
        handleItemChange,
    } = useRoom();

    return (
        <RoomWrapper>
            <RoomAppBar />
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <List dense>
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
                    {items && items.length < 10 && (
                        <>
                            <TextField
                                label="Add item*"
                                type="text"
                                value={item}
                                onChange={handleItemChange}
                                onKeyUp={handleKeyUp}
                                onBlur={handleAddItem}
                            />
                            <Button
                                variant="contained"
                                disabled={!item}
                                onClick={handleAddItem}
                            >
                                Add
                            </Button>
                        </>
                    )}
                </Grid>
                <Grid item xs={6} sx={{ height: "calc(100vh - 8.5rem)" }}>
                    <Chat />
                </Grid>
            </Grid>
        </RoomWrapper>
    );
};
