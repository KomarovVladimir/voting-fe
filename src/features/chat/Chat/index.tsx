import { Avatar, Box, ListItemText, Typography } from "@mui/material";

import { useChat } from "./useChat";
import { ChatBox, ChatPaper, Message, MessageHeader } from "./styled";
import { ChatInput } from "./ChatInput";

export const Chat = () => {
    const { messages } = useChat();

    return (
        <ChatPaper>
            <ChatBox dense disablePadding>
                {messages &&
                    messages?.map(({ id, userName, date, text, avatar }) => (
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
                                    <Typography
                                        color="primary"
                                        fontWeight="600"
                                    >
                                        {userName}
                                    </Typography>
                                    <Typography color="primary">
                                        {date}
                                    </Typography>
                                </MessageHeader>
                                <ListItemText primary={text} />
                            </Box>
                        </Message>
                    ))}
            </ChatBox>
            <ChatInput />
        </ChatPaper>
    );
};
