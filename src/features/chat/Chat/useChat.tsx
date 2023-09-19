import { KeyboardEvent, ChangeEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useLazyGetMessagesQuery, useSendMessageMutation } from "../chatApi";
import { useUser } from "features/auth/hooks/useUser";

export const useChat = () => {
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

    const handleSend = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "Enter") {
            handleSendMessage();
        }
    };

    return {
        text,
        handleSend,
        messages: data?.messages,
        handleSendMessage,
        handleChange,
    };
};
