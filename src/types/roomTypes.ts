export type ItemData = {
    id: string;
    name: string;
    votes: number;
    roomId: string | number;
};

export type ItemsData = { items: ItemData[] };

export type Room = {
    id: string;
    name: string;
    status: number;
};

export type RoomData = {
    room: Room;
};
