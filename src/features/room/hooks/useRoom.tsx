import { SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { Status } from "types";

import { useLazyGetRoomDataQuery, useUpdateRoomMutation } from "../roomApi";

export const useRoom = () => {
    const { roomId } = useParams();
    const [participantsOpen, setParticipantsOpen] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [status, setStatus] = useState<Status>("Pending");
    const [updateRoom] = useUpdateRoomMutation();
    const [getRoomData, { data: response }] = useLazyGetRoomDataQuery();

    useEffect(() => {
        if (roomId) {
            getRoomData(roomId);
        }
    }, [roomId, getRoomData]);

    useEffect(() => {
        if (response) {
            setStatus(response?.data?.status);
        }
    }, [status, response]);

    const handleStatusChange = (e: SelectChangeEvent) => {
        updateRoom({ id: roomId, status: e.target.value as Status });
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
        name: response?.data?.name,
        snackbarOpen,
        handleSnackbarOpen,
        handleSnackbarClose,
        participantsOpen,
        handleParticipantsOpen,
        handleParticipantsClose,
        handleStatusChange,
    };
};
