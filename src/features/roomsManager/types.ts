export type CreateRoomRequest = {
    name: string;
    userId: number;
    creationDate: Date;
};

//TODO: Consider unifying types
export type JoinRoomRequest = { roomId: number; userId: number };

export type LeaveRoomRequest = { roomId: number; userId: number };
