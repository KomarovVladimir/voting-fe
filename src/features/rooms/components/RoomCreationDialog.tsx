import { Box, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { useState } from "react";

import { Dialog, DialogProps } from "components/Dialog";

import { addRoom } from "../slice/roomsSlice";

export const RoomCreationDialog = ({ open, onClose }: DialogProps) => {
    const dispatch = useDispatch();
    const [roomName, setRoomName] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRoomName(event.currentTarget.value);
    };

    const handleSubmit = () => {
        dispatch(addRoom(roomName));
        setRoomName("");
        onClose();
    };

    const handleClose = () => {
        setRoomName("");
        onClose();
    };

    return (
        <Dialog
            title="Add a new room"
            onSubmit={handleSubmit}
            onClose={handleClose}
            {...{ open }}
        >
            <Box component="form" onSubmit={handleSubmit}>
                <TextField value={roomName} onChange={handleChange} />
            </Box>
        </Dialog>
    );
};
