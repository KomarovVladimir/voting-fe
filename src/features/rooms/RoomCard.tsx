import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActionArea,
    Stack,
} from "@mui/material";

import image from "assets/images/paella.jpg";

export type RoomCardProps = {
    name: string;
    status: string;
    endingDate?: string;
};

export const RoomCard = ({ name, status, endingDate }: RoomCardProps) => (
    <Card>
        <CardActionArea>
            <CardMedia component="img" height="140" image={image} alt="Image" />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body2" color="text.secondary">
                        {status}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {endingDate}
                    </Typography>
                </Stack>
            </CardContent>
        </CardActionArea>
    </Card>
);
