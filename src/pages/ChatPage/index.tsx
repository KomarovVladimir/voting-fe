import { ChatLayout } from "components/layouts";

import { Chat, RoomsManager } from "features";

export const ChatPage = () => {
    return <ChatLayout rooms={<RoomsManager />} chat={<Chat />} />;
};
