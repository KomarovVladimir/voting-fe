import { statuses } from "common/statuses";

export type Status = (typeof statuses)[number];

export interface IItem {
    id: string;
    name: string;
    votes: number;
    roomId: string | number;
}

export interface IRoom {
    id: string;
    name: string;
    status: Status;
}
