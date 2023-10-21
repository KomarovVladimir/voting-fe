import { KeyboardEvent, ChangeEvent, useState } from "react";
import { useParams } from "react-router-dom";

import { useUser } from "features";
import { AuthUser } from "features";

import { useSendMessageMutation } from "../api";

export const useChatInput = () => {
    const {
        user: { id: userId },
    } = useUser() as { user: AuthUser };
    const { roomId } = useParams() as { roomId: string };
    const [sendMessage] = useSendMessageMutation();
    const [text, setText] = useState("");

    const handleSendMessage = () => {
        sendMessage({ roomId, userId, text, postingDate: new Date() });
        setText("");
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
