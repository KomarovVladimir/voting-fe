import { CardContent, Typography, CardActionArea, Stack } from "@mui/material";
import { useNavigate } from "react-router";

import { statuses } from "common/statuses";
import { Status } from "types/roomTypes";

import { StyledCard } from "./styled";

export type RoomCardProps = {
    id: string;
    name: string;
    status: Status;
    participants?: number;
};

//TODO: Return the card footer
export const RoomCard = ({
    id,
    name,
    status = statuses[0],
    participants = 0,
}: RoomCardProps) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/authorized/Room/${id}`);
    };

    return (
        <StyledCard>
            <CardActionArea onClick={handleNavigate}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Stack direction="row" justifyContent="space-between">
                        <Typography variant="body2" color="text.secondary">
                            {status}
                        </Typography>
                        {
                            <Typography variant="body2" color="text.secondary">
                                Participants: {participants}
                            </Typography>
                        }
                    </Stack>
                </CardContent>
            </CardActionArea>
        </StyledCard>
    );
};
