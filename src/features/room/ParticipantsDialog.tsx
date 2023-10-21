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

import { useExcludeMemberMutation } from "./roomApi";
import { useRoom } from "./hooks";

type ParticipantsDialogProps = {
    roomId: string;
    open: boolean;
    onClose: () => void;
};

//TODO: Move the logic to a hook
export const ParticipantsDialog = ({
    open,
    roomId,
    onClose,
}: ParticipantsDialogProps) => {
    const { members } = useRoom();
    const [excludeUser] = useExcludeMemberMutation();

    const handleExclude = (userId: number) => () => {
        excludeUser({ roomId: Number(roomId), userId });
    };

    return (
        <Dialog
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            {...{ open, onClose }}
        >
            <DialogTitle>Room members</DialogTitle>
            <DialogContent>
                <List dense>
                    {members.map(({ id, username }) => (
                        <ListItem
                            key={id}
                            secondaryAction={
                                <IconButton
                                    edge="end"
                                    aria-label="delete"
                                    onClick={handleExclude(id)}
                                >
                                    <CloseIcon />
                                </IconButton>
                            }
                        >
                            <ListItemText primary={username} />
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
