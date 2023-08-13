import { Box, TextField } from "@mui/material";
import { ActionCreatorWithPayload, AnyAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useState } from "react";

import { Dialog } from "components/Dialog";

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

    const handleSubmit = () => {
        if (itemName) {
            dispatch(submitAction(itemName));
            setItemName("");
            onClose();
        } else {
            setItemName("");
            onClose();
        }
    };

    const handleClose = () => {
        setItemName("");
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
                <TextField value={itemName} onChange={handleChange} />
            </Box>
        </Dialog>
    );
};
