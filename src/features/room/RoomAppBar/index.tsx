import {
    Typography,
    TextField,
    MenuItem,
    Button,
    Snackbar,
    Stack,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Link } from "react-router-dom";

import { AppBar } from "components";
import { roomStatuses } from "common/constants";

import { useRoomAppBar } from "./useRoomAppBar";

import { ParticipantsDialog } from "../ParticipantsDialog";

export const RoomAppBar = () => {
    const {
        handleSnackbarClose,
        snackbarOpen,
        participantsOpen,
        handleParticipantsClose,
        name,
        status,
        handleStatusChange,
        handleParticipantsOpen,
        handleSnackbarOpen,
    } = useRoomAppBar();

    return (
        <>
            <Snackbar
                message="Copied to clipboard"
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "center",
                }}
                autoHideDuration={2000}
                onClose={handleSnackbarClose}
                open={snackbarOpen}
            />
            <ParticipantsDialog
                open={participantsOpen}
                onClose={handleParticipantsClose}
            />
            <AppBar
                title={
                    <>
                        <Typography
                            variant="h6"
                            component={Link}
                            to="/authorized/rooms"
                            mr={2}
                        >
                            Rooms
                        </Typography>
                        <Typography variant="h6" component="span">
                            {name}
                        </Typography>
                    </>
                }
                menu={
                    <Stack gap={2} direction="row" mr={2}>
                        <TextField
                            select
                            value={status}
                            label="Status"
                            onChange={handleStatusChange}
                            sx={{ minWidth: 120 }}
                        >
                            {roomStatuses.map((item, index) => (
                                <MenuItem key={index} value={index}>
                                    {item}
                                </MenuItem>
                            ))}
                        </TextField>
                        <Button
                            sx={{ color: "#fff" }}
                            onClick={handleParticipantsOpen}
                        >
                            N participants
                        </Button>
                        <Button
                            onClick={handleSnackbarOpen}
                            endIcon={<ContentCopyIcon />}
                            sx={{ color: "#fff" }}
                        >
                            #387645
                        </Button>
                    </Stack>
                }
            />
        </>
    );
};
