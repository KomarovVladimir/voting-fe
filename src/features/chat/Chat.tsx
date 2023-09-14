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

import { useLazyGetMessagesQuery, useSendMessageMutation } from "./chatApi";
import { useUser } from "features/auth/hooks/useUser";

export const Chat = () => {
    const { user } = useUser();
    const { roomId } = useParams();
    const [sendMessage] = useSendMessageMutation();
    const [trigger, { data }] = useLazyGetMessagesQuery();
    const [text, setText] = useState("");

    useEffect(() => {
        if (roomId) {
            trigger(roomId);
        }
    }, [roomId, trigger]);

    const handleSendMessage = () => {
        if (roomId) {
            sendMessage({ userName: user?.email, roomId, text });
            setText("");
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value as string);
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
                    {data?.messages?.map(({ id, userName, date, text }) => (
                        <ListItem
                            key={id}
                            sx={{
                                flexWrap: "wrap",
                                justifyContent: "start",
                            }}
                        >
                            <ListItemText primary={userName} secondary={date} />
                            <Typography variant="body2" display="block">
                                {text}
                            </Typography>
                        </ListItem>
                    ))}
                </List>
            </Paper>
            <TextField
                id="message-input"
                value={text}
                onChange={handleChange}
                InputProps={{
                    endAdornment: (
                        <>
                            {text && (
                                <Button
                                    variant="contained"
                                    onClick={handleSendMessage}
                                >
                                    Send
                                </Button>
                            )}
                        </>
                    ),
                }}
            />
        </>
    );
};
