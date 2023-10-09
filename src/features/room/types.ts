import { statuses } from "common/statuses";

export type Status = (typeof statuses)[number];

export type ItemData = {
    id: string;
    name: string;
    votes: number;
    roomId: string | number;
};

export type ItemsData = ItemData[];

export type Room = {
    id: string;
    name: string;
    status: Status;
};
