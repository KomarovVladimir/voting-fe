import { useState } from "react";

import { useAuth, AuthUser } from "features";

import { useGetUserRoomsQuery } from "../api";

export const useRoomsManager = () => {
    const {
        user: { id: userId },
    } = useAuth() as { user: AuthUser };
    const { data: rooms = [] } = useGetUserRoomsQuery(userId);
    const [creationOpen, setCreationOpen] = useState(false);
    const [joiningOpen, setJoiningOpen] = useState(false);

    const handleOpen = () => {
        setCreationOpen(true);
    };

    const handleClose = () => {
        setCreationOpen(false);
    };

    const handleJoiningOpen = () => {
        setJoiningOpen(true);
    };

    const handleJoiningClose = () => {
        setJoiningOpen(false);
    };

    return {
        rooms,
        creationOpen,
        joiningOpen,
        handleOpen,
        handleClose,
        handleJoiningOpen,
        handleJoiningClose,
    };
};
