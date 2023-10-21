export interface MessageData {
    id: string;
    username: string;
    text: string;
    created?: string;
    lastUpdated?: string;
    userId: number;
}

export interface PostMessageRequest {
    roomId: string;
    userId: number;
    text: string;
    postingDate: Date;
}
