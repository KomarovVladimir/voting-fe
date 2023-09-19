import styled from "@emotion/styled";
import { TextField, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import { useChat } from "./useChat";

const Input = styled(TextField)({
    display: "flex",
    alignItems: "center",
    height: "3rem",
    border: "none",
    borderRadius: "8px",
    background: "rgba(0, 0, 0, 0.20)",
});

export const ChatInput = () => {
    const { text, handleSendMessage, handleChange } = useChat();

    return (
        <Input
            id="message-input"
            value={text}
            onChange={handleChange}
            autoComplete="off"
            variant="standard"
            size="small"
            InputProps={{
                disableUnderline: true,
                sx: {
                    p: ".2rem 1rem",
                    width: "100%",
                    height: "100%",
                },
                endAdornment: (
                    <>
                        {text && (
                            <IconButton onClick={handleSendMessage}>
                                <SendIcon />
                            </IconButton>
                        )}
                    </>
                ),
            }}
            placeholder="Write a message..."
        />
    );
};
