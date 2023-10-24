import { statuses } from "common/constants";

export type Status = (typeof statuses)[number];

export type ItemData = {
    id: number;
    name: string;
    votes: number;
    voted: boolean;
    roomId: string | number;
};

export type RoomData = {
    id: number;
    authorName?: string;
    isOwner: boolean;
    name: string;
    status: Status;
};

//TODO: Add a status field
export type MemberData = {
    id: number;
    username?: string;
    email?: string;
};

export type GetItemsRequest = { roomId: string; userId: number };

export type ExcludeMemberRequest = { roomId: string; userId: number };

export type VoteRequest = { roomId: number; userId: number; itemId: number };
