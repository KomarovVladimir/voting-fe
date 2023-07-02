import { Box, Typography } from "@mui/material";

//TODO: Move the type
type Dish = {
    name: string;
    image: string;
    description: string;
};

type RestaurantsTableProps = {
    name: string;
    dishes?: Dish[];
    rating?: number;
};

export const Restaurant = ({ name, dishes, rating }: RestaurantsTableProps) => {
    return (
        <Box>
            <Typography variant="h2">{name}</Typography>
            {dishes?.length}
            {rating}
        </Box>
    );
};
