import { statuses } from "common/statuses";

export type Status = (typeof statuses)[number];

export interface IItem {
    id: number;
    name: string;
    votes: number;
    voted: boolean;
    roomId: string | number;
}

export interface IRoom {
    id: number;
    ownerId: number;
    authorName?: string;
    name: string;
    status: Status;
}

//TODO: Add a status field
export interface IMember {
    id: number;
    username?: string;
    email?: string;
}
