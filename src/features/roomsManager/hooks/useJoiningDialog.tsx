import { useAuth, AuthUser } from "features";
import { useState, ChangeEvent, FormEvent } from "react";

import { useJoinRoomMutation } from "../api";

export const useJoiningDialog = (onClose: () => void) => {
    const {
        user: { id: userId },
    } = useAuth() as { user: AuthUser };
    const [joinRoom] = useJoinRoomMutation();
    const [roomId, setRoomId] = useState<number | null>(null);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setRoomId(+event.currentTarget.value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        joinRoom({ roomId, userId } as { roomId: number; userId: number });
        setRoomId(null);
        onClose();
    };

    const handleClose = () => {
        setRoomId(null);
        onClose();
    };

    return {
        roomId,
        handleChange,
        handleSubmit,
        handleClose,
    };
};
