import { SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { Status } from "types/roomTypes";

import {
    useLazyGetMembersQuery,
    useGetRoomDataQuery,
    useUpdateRoomMutation,
} from "../roomApi";

export const useRoom = () => {
    const { roomId } = useParams() as { roomId: string };
    const [participantsOpen, setParticipantsOpen] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [status, setStatus] = useState<Status>("Pending");
    const [updateRoom] = useUpdateRoomMutation();
    const { data: room } = useGetRoomDataQuery(roomId);
    const [getMembers, { data: members = [] }] = useLazyGetMembersQuery();

    useEffect(() => {
        getMembers(roomId);
    }, [getMembers, roomId]);

    useEffect(() => {
        if (room) {
            setStatus(room?.status);
        }
    }, [status, room]);

    const handleStatusChange = (e: SelectChangeEvent) => {
        updateRoom({
            id: Number(roomId),
            name: room?.name as string,
            status: e.target.value as Status,
        });
    };

    const handleParticipantsOpen = () => {
        setParticipantsOpen(true);
    };

    const handleParticipantsClose = () => {
        setParticipantsOpen(false);
    };

    const handleCopy = (id: string) => () => {
        navigator.clipboard.writeText(id);
        setSnackbarOpen(true);
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    return {
        roomId: Number(roomId),
        status,
        members,
        name: room?.name,
        snackbarOpen,
        handleCopy,
        handleSnackbarClose,
        participantsOpen,
        handleParticipantsOpen,
        handleParticipantsClose,
        handleStatusChange,
    };
};
