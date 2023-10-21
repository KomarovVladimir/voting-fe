import { useParams } from "react-router-dom";

import { useGetMessagesQuery } from "../api/chatApi";

export const useChat = () => {
    const { roomId } = useParams() as { roomId: string };
    const { data: messages } = useGetMessagesQuery(roomId);

    return {
        messages,
    };
};
