import {
    Dialog,
    Box,
    TextField,
    Button,
    DialogActions,
    DialogTitle,
    DialogContent,
} from "@mui/material";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { FormEvent, useState } from "react";

type ItemCreationDialogProps = {
    open: boolean;
    onClose: () => void;
    submitAction: ActionCreatorWithPayload<string>;
};

export const ItemCreationDialog = ({
    open,
    submitAction,
    onClose,
}: ItemCreationDialogProps) => {
    const dispatch = useDispatch();
    const [itemName, setItemName] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setItemName(event.currentTarget.value);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        dispatch(submitAction(itemName));
        setItemName("");
        onClose();
    };

    const handleClose = () => {
        setItemName("");
        onClose();
    };

    return (
        <Dialog onClose={handleClose} {...{ open }}>
            <Box component="form" onSubmit={handleSubmit}>
                <DialogTitle>Add a new room</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        value={itemName}
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button disabled={itemName === ""} type="submit">
                        Submit
                    </Button>
                </DialogActions>
            </Box>
        </Dialog>
    );
};
