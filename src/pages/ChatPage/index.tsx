import { ChatLayout } from "components/layouts";

import { Chat, RoomsManager } from "features";

export const ChatPage = () => {
    return (
        <ChatLayout
            left={<RoomsManager />}
            center={<Chat />}
            right={<div>Right</div>}
        />
    );
};
