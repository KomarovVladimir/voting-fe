import {
    Dialog,
    Box,
    TextField,
    Button,
    DialogActions,
    DialogTitle,
    DialogContent,
} from "@mui/material";
import { MutationTrigger } from "@reduxjs/toolkit/dist/query/react/buildHooks";
import { ChangeEvent, FormEvent, useState } from "react";

type ActionDialogProps = {
    open: boolean;
    onClose: () => void;
    action: MutationTrigger<any>;
};

export const ActionDialog = ({ open, action, onClose }: ActionDialogProps) => {
    const [itemName, setItemName] = useState("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setItemName(event.currentTarget.value);
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        action(itemName).catch((error) =>
            console.error("An error occurred", error)
        );
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
