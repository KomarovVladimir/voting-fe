import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import { Input } from "./styled";
import { useChatInput } from "./useChatInput";

export const ChatInput = () => {
    const { text, handleSend, handleSendMessage, handleChange } =
        useChatInput();

    return (
        <Input
            id="message-input"
            value={text}
            onChange={handleChange}
            autoComplete="off"
            variant="standard"
            size="small"
            onKeyUp={handleSend}
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
