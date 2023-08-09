import {
    Dialog as MuiDialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
} from "@mui/material";

export interface DialogProps {
    title: string;
    text?: string;
    open: boolean;
    actions?: JSX.Element;
    children?: React.ReactNode;
    onClose: () => void;
}

export const Dialog = ({
    actions,
    title,
    text,
    onClose,
    open,
    children,
}: DialogProps) => {
    const handleClose = () => {
        onClose();
    };

    return (
        <MuiDialog open={open} onClose={handleClose}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                {text && <DialogContentText>{text}</DialogContentText>}
                {children}
            </DialogContent>
            {actions}
        </MuiDialog>
    );
};
