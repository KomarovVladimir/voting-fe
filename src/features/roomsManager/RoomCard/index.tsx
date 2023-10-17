import {
    CardContent,
    Typography,
    CardActionArea,
    Stack,
    IconButton,
    CardHeader,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import ClearIcon from "@mui/icons-material/Clear";
import { useNavigate } from "react-router";

import { statuses } from "common/statuses";
import { Status } from "types/roomTypes";
import { IUser } from "features/auth/types/types";
import { useAuth } from "features/auth";

import { StyledCard } from "./styled";

import {
    useDeleteRoomMutation,
    useLeaveRoomMutation,
} from "../roomsManagerApi";

export type RoomCardProps = {
    id: number;
    ownerId: number;
    authorName?: string;
    name: string;
    status: Status;
    participants?: number;
};

//TODO: Add area attributes
//TODO: Rework the layout
//TODO: Move and style the menu
//TODO: Add synthetic events
//TODO: Add an deleting alert dialog
//TODO: Make the whole card clickable
export const RoomCard = ({
    id,
    name,
    ownerId,
    authorName,
    status = statuses[0],
    participants = 0,
}: RoomCardProps) => {
    const {
        user: { id: userId },
    } = useAuth() as { user: IUser };
    const navigate = useNavigate();
    const [deleteRoom] = useDeleteRoomMutation();
    const [leaveRoom] = useLeaveRoomMutation();
    const isOwner = userId === ownerId;

    const handleDelete = () => {
        deleteRoom(id);
    };

    const handleLeave = () => {
        leaveRoom({ roomId: id, userId });
    };

    const handleNavigate = () => {
        navigate(`/authorized/Room/${id}`);
    };

    return (
        <>
            <StyledCard>
                <CardHeader
                    action={
                        isOwner ? (
                            <IconButton
                                aria-label="delete-button"
                                onClick={handleDelete}
                            >
                                <ClearIcon />
                            </IconButton>
                        ) : (
                            <IconButton
                                aria-label="leave-button"
                                onClick={handleLeave}
                            >
                                <LogoutIcon />
                            </IconButton>
                        )
                    }
                    title={name}
                    subheader={authorName}
                />
                <CardActionArea onClick={handleNavigate}>
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
