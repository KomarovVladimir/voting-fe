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

import { statuses } from "common/constants";
import { Status } from "features";

import { StyledCard } from "./styled";

import { useRoomCard } from "../hooks";

export type RoomCardProps = {
    id: number;
    ownerId: number;
    authorName?: string;
    name: string;
    status: Status;
    members?: number;
};

//TODO: Add area attributes
//TODO: Move and style the menu
//TODO: Add an deleting alert dialog
//TODO: Make the whole card clickable
export const RoomCard = ({
    id,
    name,
    ownerId,
    authorName,
    status = statuses[0],
    members = 0,
}: RoomCardProps) => {
    const { isOwner, handleDelete, handleLeave, handleNavigate } = useRoomCard({
        id,
        ownerId,
    });

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
                                    Members: {members}
                                </Typography>
                            }
                        </Stack>
                    </CardContent>
                </CardActionArea>
            </StyledCard>
        </>
    );
};
