import React from "react";

import {
    Dialog,
    TextField,
    Button,
    DialogActions,
    DialogTitle,
    DialogContent,
    Box,
} from "@mui/material";

import { Paper } from "components";

import { useJoiningDialog } from "../hooks";

type JoiningDialogProps = {
    open: boolean;
    onClose: () => void;
};

export const JoiningDialog = ({ open, onClose }: JoiningDialogProps) => {
    const { roomId, handleChange, handleSubmit, handleClose } =
        useJoiningDialog(onClose);

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
