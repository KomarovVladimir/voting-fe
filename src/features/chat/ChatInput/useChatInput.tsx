import { KeyboardEvent, ChangeEvent, useState } from "react";
import { useParams } from "react-router-dom";

import { useSendMessageMutation } from "../chatApi";
import { useUser } from "features/auth/hooks/useUser";

export const useChatInput = () => {
    const { user } = useUser();
    const { roomId } = useParams();
    const [sendMessage] = useSendMessageMutation();
    const [text, setText] = useState("");

    const handleSendMessage = () => {
        if (roomId) {
            sendMessage({ userName: user?.email, roomId, text });
            setText("");
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value as string);
    };

    const handleSend = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "Enter") {
            handleSendMessage();
        }
    };

    return {
        text,
        handleSend,
        handleSendMessage,
        handleChange,
    };
};
