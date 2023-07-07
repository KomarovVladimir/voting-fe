import {
    Card,
    CardContent,
    Typography,
    CardHeader,
    CardMedia,
    IconButton,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

type DishCardProps = {
    header: string;
    subHeader?: string;
    image?: string;
    description?: string;
    imageAlt?: string;
};

export const DishCard = ({
    header,
    subHeader,
    image,
    imageAlt,
    description,
}: DishCardProps) => {
    return (
        <Card>
            <CardHeader
                title={header}
                subheader={subHeader}
                action={
                    <IconButton aria-label="settings">
                        <ClearIcon />
                    </IconButton>
                }
            />
            <CardMedia
                component="img"
                height="194"
                image={image}
                alt={imageAlt}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};
