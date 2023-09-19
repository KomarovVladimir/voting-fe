import {
    Avatar,
    Box,
    IconButton,
    List,
    ListItem,
    ListItemText,
    TextField,
    Typography,
    styled,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import { useChat } from "./useChat";
import { ChatPaper } from "./styled";
import { ChatInput } from "./ChatInput";

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

const ChatBox = styled(List)({
    overflowY: "auto",
});

export const Chat = () => {
    const { messages } = useChat();

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
                <ChatInput />
            </ChatPaper>
        </>
    );
};
