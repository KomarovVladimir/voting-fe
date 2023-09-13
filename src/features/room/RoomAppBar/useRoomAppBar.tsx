import { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "react-router";

import { useLazyGetRoomDataQuery, useUpdateRoomMutation } from "../roomApi";

export const useRoomAppBar = () => {
    const { roomId } = useParams();
    const [participantsOpen, setParticipantsOpen] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [status, setStatus] = useState("");
    const [updateRoom] = useUpdateRoomMutation();
    const [getRoomData, { data: roomData }] = useLazyGetRoomDataQuery();

    useEffect(() => {
        if (roomId) {
            getRoomData(roomId);
        }
    }, [roomId, getRoomData]);

    useEffect(() => {
        if (roomData) {
            setStatus(roomData.room.status);
        }
    }, [status, roomData]);

    const handleStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        updateRoom({ id: roomId, status: e.target.value });
    };

    const handleParticipantsOpen = () => {
        setParticipantsOpen(true);
    };

    const handleParticipantsClose = () => {
        setParticipantsOpen(false);
    };

    const handleSnackbarOpen = () => {
        setSnackbarOpen(true);
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    return {
        status,
        name: roomData?.room?.name,
        snackbarOpen,
        handleSnackbarOpen,
        handleSnackbarClose,
        participantsOpen,
        handleParticipantsOpen,
        handleParticipantsClose,
        handleStatusChange,
    };
};
