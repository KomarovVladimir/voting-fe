import React from "react";

import { useNavigate } from "react-router";

import { useDeleteRoomMutation, useLeaveRoomMutation } from "../api";

export const useRoomCard = (id: number) => {
    const navigate = useNavigate();
    const [deleteRoom] = useDeleteRoomMutation();
    const [leaveRoom] = useLeaveRoomMutation();

    const handleDelete = () => {
        deleteRoom(id);
    };

    const handleLeave = () => {
        leaveRoom(id);
    };

    const handleNavigate = () => {
        navigate(`/authorized/rooms/${id}`);
    };

    return { handleDelete, handleLeave, handleNavigate };
};
