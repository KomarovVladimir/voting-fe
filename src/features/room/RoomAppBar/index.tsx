import {
    Typography,
    TextField,
    MenuItem,
    Button,
    Snackbar,
    Stack,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Link } from "react-router-dom";

import { AppBar } from "components";
import { roomStatuses } from "common/constants";

import { useRoomAppBar } from "./useRoomAppBar";

import { ParticipantsDialog } from "../ParticipantsDialog";

//TODO: Update the breadcrumbs
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
                    <Stack direction="row" gap={0.5} alignItems="center">
                        <Typography
                            component={Link}
                            to="/authorized/rooms"
                            color="white"
                            fontSize="2rem"
                            sx={{
                                textDecoration: "none",
                                boxShadow: "none",
                                "&:hover": {
                                    color: "primary.main",
                                },
                            }}
                        >
                            Rooms
                        </Typography>
                        <ArrowBackIosNewIcon fontSize="small" />
                        <Typography component="span" fontSize="2rem">
                            {name}
                        </Typography>
                    </Stack>
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
