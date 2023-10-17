import {
    Dialog,
    TextField,
    Button,
    DialogActions,
    DialogTitle,
    DialogContent,
    Box,
} from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";

import { Paper } from "components";
import { useAuth } from "features/auth";
import { IUser } from "features/auth/types/types";

import { useJoinRoomMutation } from "./roomsManagerApi";

export type JoiningDialogProps = {
    open: boolean;
    onClose: () => void;
};

//Update the joining logic
export const JoiningDialog = ({ open, onClose }: JoiningDialogProps) => {
    const {
        user: { id: userId },
    } = useAuth() as { user: IUser };
    const [joinRoom] = useJoinRoomMutation();
    const [roomId, setRoomId] = useState<number | null>(null);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setRoomId(Number(event.currentTarget.value));
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

    return (
        <Dialog onClose={handleClose} PaperComponent={Paper} {...{ open }}>
            <Box component="form" onSubmit={handleSubmit}>
                <DialogTitle>Join a room</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        value={roomId}
                        onChange={handleChange}
                        autoComplete="off"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button disabled={roomId === null} type="submit">
                        Submit
                    </Button>
                </DialogActions>
            </Box>
        </Dialog>
    );
};
