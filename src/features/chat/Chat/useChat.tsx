import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useLazyGetMessagesQuery } from "../chatApi";

export const useChat = () => {
    const { roomId } = useParams();
    const [trigger, { data }] = useLazyGetMessagesQuery();

    useEffect(() => {
        if (roomId) {
            trigger(roomId);
        }
    }, [roomId, trigger]);

    return {
        messages: data?.messages,
    };
};
