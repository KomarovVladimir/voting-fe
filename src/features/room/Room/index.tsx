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
    paddingTop: "2.5rem",
    paddingLeft: "2rem",
    paddingRight: "2rem",
});

//TODO: Move the styles
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
            <Grid container spacing={2} rowSpacing="0">
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
                    {items && items.length < 10 && (
                        <>
                            <TextField
                                label="Add item*"
                                type="text"
                                value={item}
                                onChange={handleItemChange}
                                onKeyUp={handleKeyUp}
                                onBlur={handleAddItem}
                                InputProps={{
                                    disableUnderline: true,
                                    sx: {
                                        p: ".2rem 1rem",
                                        width: "100%",
                                        height: "100%",
                                    },
                                    endAdornment: (
                                        <>
                                            {item && (
                                                <Button
                                                    variant="contained"
                                                    onClick={handleAddItem}
                                                >
                                                    Add
                                                </Button>
                                            )}
                                        </>
                                    ),
                                }}
                            />
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
