import {
    Avatar,
    Button,
    List,
    ListItem,
    ListItemText,
    Paper,
    TextField,
    Typography,
} from "@mui/material";

import { useChat } from "./useChat";
import { ChatPaper } from "./styled";

export const Chat = () => {
    const { text, messages, handleSendMessage, handleChange } = useChat();

    return (
        <>
            <ChatPaper
                sx={{
                    height: "75vh",
                    padding: 2,
                    overflowY: "auto",
                }}
            >
                <List dense>
                    {messages &&
                        messages?.map(
                            ({ id, userName, date, text, avatar }) => (
                                <ListItem
                                    key={id}
                                    sx={{
                                        flexWrap: "wrap",
                                        justifyContent: "start",
                                    }}
                                >
                                    <Avatar alt="Test" src={avatar} />
                                    <ListItemText
                                        primary={userName}
                                        secondary={date}
                                    />
                                    <Typography variant="body2" display="block">
                                        {text}
                                    </Typography>
                                </ListItem>
                            )
                        )}
                </List>
            </ChatPaper>
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
