import { ChatLayout } from "components/layouts";

import { Chat } from "features";

export const ChatPage = () => {
    return (
        <ChatLayout
            left={<div>Left</div>}
            center={<Chat />}
            right={<div>Right</div>}
        />
    );
};
