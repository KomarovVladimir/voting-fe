import { Meta, StoryObj } from "@storybook/react";
import {
    reactRouterParameters,
    withRouter
} from "storybook-addon-react-router-v6";

import { statuses } from "common/constants";
import { RoomCard } from "./RoomCard";

const meta = {
    title: "RoomCard",
    component: RoomCard,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"],
    decorators: [withRouter]
} satisfies Meta<typeof RoomCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        id: 123,
        name: "Room Name",
        isOwner: false,
        authorName: "Author",
        status: statuses[0],
        members: 12
    },
    parameters: {
        reactRouter: reactRouterParameters({
            location: {
                pathParams: { roomId: "42" }
            },
            routing: {
                path: "/authorized/rooms/roomId"
            }
        })
    }
};
