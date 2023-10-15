import {
    CardContent,
    Typography,
    CardActionArea,
    Stack,
    IconButton,
    CardHeader,
    Menu,
    MenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { MouseEvent, useState } from "react";
import { useNavigate } from "react-router";

import { statuses } from "common/statuses";
import { Status } from "types/roomTypes";
import { IUser } from "features/auth/types/types";
import { useAuth } from "features/auth";

import { StyledCard } from "./styled";

import { useDeleteRoomMutation } from "../roomsManagerApi";

export type RoomCardProps = {
    id: number;
    ownerId: number;
    name: string;
    status: Status;
    participants?: number;
};

//TODO: Add area attributes
//TODO: Rework the layout
//TODO: Move and style the menu
//TODO: Add synthetic events
//TODO: Add an deleting alert dialog
export const RoomCard = ({
    id,
    name,
    ownerId,
    status = statuses[0],
    participants = 0,
}: RoomCardProps) => {
    const {
        user: { id: userId },
    } = useAuth() as { user: IUser };
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [deleteRoom] = useDeleteRoomMutation();
    const open = Boolean(anchorEl);

    const showMenu = userId === ownerId;

    const handleMenuOpen = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDelete = () => {
        deleteRoom(id);
        handleClose();
    };

    const handleNavigate = () => {
        navigate(`/authorized/Room/${id}`);
    };

    return (
        <>
            {showMenu && (
                <Menu
                    id="room-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Settings</MenuItem>
                    <MenuItem onClick={handleDelete}>Delete</MenuItem>
                </Menu>
            )}
            <StyledCard>
                <CardActionArea onClick={handleNavigate}>
                    <CardHeader
                        action={
                            <>
                                {showMenu && (
                                    <IconButton
                                        aria-label="settings"
                                        onClick={handleMenuOpen}
                                    >
                                        <MoreVertIcon />
                                    </IconButton>
                                )}
                            </>
                        }
                        title={name}
                    />
                    <CardContent>
                        <Stack direction="row" justifyContent="space-between">
                            <Typography variant="body2" color="text.secondary">
                                {status}
                            </Typography>
                            {
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    Participants: {participants}
                                </Typography>
                            }
                        </Stack>
                    </CardContent>
                </CardActionArea>
            </StyledCard>
        </>
    );
};
