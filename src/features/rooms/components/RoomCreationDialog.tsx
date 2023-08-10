import { Box, TextField } from "@mui/material";
import { useState } from "react";

import { Dialog, DialogProps } from "components/Dialog";

export const RoomCreationDialog = ({ open = false, onClose }: DialogProps) => {
    const [roomName, setRoomName] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRoomName(event.currentTarget.value);
    };

    const handleSubmit = () => {
        console.log(roomName);
        setRoomName("");
        onClose();
    };

    return (
        <Dialog
            title="Add a new room"
            onSubmit={handleSubmit}
            {...{ open, onClose }}
        >
            <Box component="form" onSubmit={handleSubmit}>
                <TextField value={roomName} onChange={handleChange} />
            </Box>
        </Dialog>
    );
};
