import {
    Card,
    CardContent,
    Typography,
    CardHeader,
    CardMedia,
    IconButton,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

type RestaurantCardProps = {
    name: string;
    subHeader?: string;
    image?: string;
    description?: string;
    imageAlt?: string;
};

export const RestaurantCard = ({
    name,
    subHeader,
    image,
    imageAlt,
    description,
}: RestaurantCardProps) => {
    return (
        <Card>
            <CardHeader
                title={name}
                subheader={subHeader}
                action={
                    <IconButton aria-label="settings">
                        <ClearIcon />
                    </IconButton>
                }
            />
            {image && (
                <CardMedia
                    component="img"
                    height="194"
                    image={image}
                    alt={imageAlt}
                />
            )}
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};
