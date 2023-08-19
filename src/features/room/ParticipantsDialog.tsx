import {
    Button,
    DialogActions,
    Dialog,
    DialogContent,
    List,
    DialogTitle,
    IconButton,
    ListItem,
    ListItemText,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "app/store";

import { removeParticipant } from "./roomSlice";

type ParticipantsDialogProps = {
    open: boolean;
    onClose: () => void;
};

export const ParticipantsDialog = ({
    open,
    onClose,
}: ParticipantsDialogProps) => {
    const dispatch = useDispatch();
    const { participants } = useSelector(({ room }: RootState) => room);

    const handleRemove = (id: string) => () => {
        dispatch(removeParticipant(id));
    };

    return (
        <Dialog
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            {...{ open, onClose }}
        >
            <DialogTitle>Participants</DialogTitle>
            <DialogContent>
                <List dense>
                    {Object.entries(participants).map(([id, { name }]) => (
                        <ListItem
                            key={id}
                            secondaryAction={
                                <IconButton
                                    edge="end"
                                    aria-label="delete"
                                    onClick={handleRemove(id)}
                                >
                                    <CloseIcon />
                                </IconButton>
                            }
                        >
                            <ListItemText primary={name} />
                        </ListItem>
                    ))}
                </List>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
};
