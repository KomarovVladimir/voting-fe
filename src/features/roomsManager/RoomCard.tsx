import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActionArea,
    Stack,
} from "@mui/material";
import { useNavigate } from "react-router";

import image from "assets/images/paella.jpg";
import { roomStatuses } from "common/constants";

export type RoomCardProps = {
    id: string;
    name: string;
    status: number;
    endingDate?: string;
};

export const RoomCard = ({
    id,
    name,
    status = 0,
    endingDate,
}: RoomCardProps) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/authorized/Room/${id}`);
    };

    return (
        <Card>
            <CardActionArea onClick={handleNavigate}>
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt="Image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Stack direction="row" justifyContent="space-between">
                        <Typography variant="body2" color="text.secondary">
                            {roomStatuses[status]}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {endingDate}
                        </Typography>
                    </Stack>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};
