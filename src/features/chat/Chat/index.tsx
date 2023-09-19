import { Avatar, Typography } from "@mui/material";

import { useChat } from "./useChat";
import {
    ChatBox,
    ChatPaper,
    Message,
    MessageContent,
    MessageHeader,
} from "./styled";
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
                                    marginRight: ".5rem",
                                    width: 38,
                                    height: 38,
                                }}
                            />
                            <MessageContent>
                                <MessageHeader>
                                    <Typography
                                        color="primary"
                                        fontWeight="600"
                                        fontSize="small"
                                    >
                                        {userName}
                                    </Typography>
                                    <Typography
                                        color="primary"
                                        fontSize=".75rem"
                                    >
                                        {date}
                                    </Typography>
                                </MessageHeader>
                                <Typography>{text}</Typography>
                            </MessageContent>
                        </Message>
                    ))}
            </ChatBox>
            <ChatInput />
        </ChatPaper>
    );
};
