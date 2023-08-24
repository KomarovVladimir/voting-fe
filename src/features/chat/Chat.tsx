import {
    Button,
    List,
    ListItem,
    ListItemText,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addMessage } from "./chatSlice";
import { useLazyGetMessagesQuery } from "./chatApi";

export const Chat = () => {
    const dispatch = useDispatch();
    const { roomId } = useParams();
    const [trigger, { data }] = useLazyGetMessagesQuery();
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (roomId) {
            trigger(roomId);
        }
    }, [roomId, trigger]);

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
                    {data?.messages?.map(({ id, user, time, text }) => (
                        <ListItem
                            key={id}
                            sx={{
                                flexWrap: "wrap",
                                justifyContent: "start",
                            }}
                        >
                            <ListItemText primary={user} secondary={time} />
                            <Typography variant="body2" display="block">
                                {text}
                            </Typography>
                        </ListItem>
                    ))}
                </List>
            </Paper>
            <TextField
                id="message-input"
                value={message}
                onChange={handleChange}
                InputProps={{
                    endAdornment: (
                        <>
                            {message && (
                                <Button
                                    variant="contained"
                                    onClick={handleAddMessage}
                                >
                                    Add Item
                                </Button>
                            )}
                        </>
                    ),
                }}
            />
        </>
    );
};
