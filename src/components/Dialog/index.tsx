import {
    Dialog as MuiDialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    Button,
    DialogActions,
} from "@mui/material";

export interface DialogProps {
    title?: string;
    text?: string;
    open: boolean;
    children?: React.ReactNode;
    onClose: () => void;
    onSubmit: () => void;
}

export const Dialog = ({
    title,
    text,
    onClose,
    onSubmit,
    open,
    children,
}: DialogProps) => (
    <MuiDialog {...{ open, onClose }}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
            {text && <DialogContentText>{text}</DialogContentText>}
            {children}
        </DialogContent>
        <DialogActions>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onSubmit} autoFocus>
                Submit
            </Button>
        </DialogActions>
    </MuiDialog>
);
