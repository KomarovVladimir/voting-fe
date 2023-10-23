import { useNavigate } from "react-router";

import { RoomCardProps } from "features";

import { useDeleteRoomMutation, useLeaveRoomMutation } from "../api";

export const useRoomCard = ({ id }: Pick<RoomCardProps, "id" | "ownerId">) => {
    const navigate = useNavigate();
    const [deleteRoom] = useDeleteRoomMutation();
    const [leaveRoom] = useLeaveRoomMutation();
    const isOwner = false;

    const handleDelete = () => {
        deleteRoom(id);
    };

    const handleLeave = () => {
        leaveRoom(id);
    };

    const handleNavigate = () => {
        navigate(`/authorized/rooms/${id}`);
    };

    return { isOwner, handleDelete, handleLeave, handleNavigate };
};
