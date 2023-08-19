import {
    Button,
    Divider,
    List,
    ListItem,
    ListItemText,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "app/store";

import { addMessage } from "./chatSlice";

export const Chat = () => {
    const dispatch = useDispatch();
    const [message, setMessage] = useState("");
    const messages = useSelector(({ chat }: RootState) => chat);

    const handleAddMessage = () => {
        dispatch(
            addMessage({
                userName: "Test",
                time: "Test Time am",
                text: message,
            })
        );
        setMessage("");
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value as string);
    };
    return (
        <>
            <Paper
                sx={{
                    height: "75vh",
                    padding: 2,
                    overflowY: "auto",
                }}
            >
                <List dense>
                    {Object.entries(messages).map(
                        ([id, { userName, time, text }]) => (
                            <>
                                <ListItem
                                    key={id}
                                    sx={{
                                        flexWrap: "wrap",
                                        justifyContent: "start",
                                    }}
                                >
                                    <ListItemText
                                        primary={userName}
                                        secondary={time}
                                    />
                                    <Typography variant="body2" display="block">
                                        {text}
                                    </Typography>
                                </ListItem>
                                <Divider variant="inset" component="li" />
                            </>
                        )
                    )}
                </List>
            </Paper>
            <TextField
                id="message-input"
                value={message}
                onChange={handleChange}
                InputProps={{
                    endAdornment: (
                        <Button variant="contained" onClick={handleAddMessage}>
                            Add Item
                        </Button>
                    ),
                }}
            />
        </>
    );
};
