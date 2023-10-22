import { useNavigate } from "react-router";

import { useAuth, AuthUser, RoomCardProps } from "features";

import { useDeleteRoomMutation, useLeaveRoomMutation } from "../api";

export const useRoomCard = ({
    id,
    ownerId,
}: Pick<RoomCardProps, "id" | "ownerId">) => {
    const {
        user: { id: userId },
    } = useAuth() as { user: AuthUser };
    const navigate = useNavigate();
    const [deleteRoom] = useDeleteRoomMutation();
    const [leaveRoom] = useLeaveRoomMutation();
    const isOwner = userId === ownerId;

    const handleDelete = () => {
        deleteRoom(id);
    };

    const handleLeave = () => {
        leaveRoom({ roomId: id, userId });
    };

    const handleNavigate = () => {
        navigate(`/authorized/rooms/${id}`);
    };

    return { isOwner, handleDelete, handleLeave, handleNavigate };
};
