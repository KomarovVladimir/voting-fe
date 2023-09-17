import {
    Avatar,
    Box,
    Button,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    TextField,
    Typography,
    styled,
} from "@mui/material";

import { useChat } from "./useChat";
import { ChatPaper } from "./styled";

const Message = styled(ListItem)({
    alignItems: "start",
    justifyContent: "start",
});

const MessageHeader = styled("div")({
    display: "flex",
    flexWrap: "nowrap",
    alignItems: "center",
    gap: "4px",
});

const ChatInput = styled(TextField)({
    borderRadius: "8px",
    background: "rgba(0, 0, 0, 0.20)",
});

const ChatBox = styled(List)({
    overflowY: "auto",
});

export const Chat = () => {
    const { text, messages, handleSendMessage, handleChange } = useChat();

    return (
        <>
            <ChatPaper>
                <ChatBox dense disablePadding>
                    {messages &&
                        messages?.map(
                            ({ id, userName, date, text, avatar }) => (
                                <Message key={id} dense disablePadding>
                                    <Avatar
                                        alt={userName}
                                        src={avatar}
                                        sx={{
                                            marginRight: "1rem",
                                            width: 38,
                                            height: 38,
                                        }}
                                    />
                                    <Box>
                                        <MessageHeader>
                                            <Typography fontWeight="600">
                                                {userName}
                                            </Typography>
                                            <Typography>{date}</Typography>
                                        </MessageHeader>
                                        <ListItemText primary={text} />
                                    </Box>
                                </Message>
                            )
                        )}
                </ChatBox>
                <ChatInput
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
            </ChatPaper>
        </>
    );
};
