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
import { AuthUser } from "features/auth/types";

import { useCreateRoomMutation } from "./roomsManagerApi";

export type CreationDialogProps = {
    open: boolean;
    onClose: () => void;
};

export const CreationDialog = ({ open, onClose }: CreationDialogProps) => {
    const {
        user: { id: userId },
    } = useAuth() as { user: AuthUser };
    const [createRoom] = useCreateRoomMutation();
    const [name, setName] = useState("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.currentTarget.value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createRoom({ name, userId, creationDate: new Date() });
        setName("");
        onClose();
    };

    const handleClose = () => {
        setName("");
        onClose();
    };

    return (
        <Dialog onClose={handleClose} PaperComponent={Paper} {...{ open }}>
            <Box component="form" onSubmit={handleSubmit}>
                <DialogTitle>Add a new room</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        value={name}
                        onChange={handleChange}
                        autoComplete="off"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button disabled={name === ""} type="submit">
                        Submit
                    </Button>
                </DialogActions>
            </Box>
        </Dialog>
    );
};
