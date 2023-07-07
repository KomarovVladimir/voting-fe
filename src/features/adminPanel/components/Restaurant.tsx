import { Box, Grid, Typography } from "@mui/material";

import { DishCard } from "components";
import image from "assets/images/paella.jpg";

type RestaurantsTableProps = {
    name: string;
    likes?: number;
};

export const Restaurant = ({ name }: RestaurantsTableProps) => {
    return (
        <Box>
            <Typography variant="h2" mb={4}>
                {name}
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <DishCard
                        header="Shrimp and Chorizo Paella"
                        subHeader=""
                        image={image}
                        imageAlt="Paella"
                        description=" This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like."
                    />
                </Grid>
                <Grid item xs={3}>
                    <DishCard
                        header="Shrimp and Chorizo Paella"
                        subHeader=""
                        image={image}
                        imageAlt="Paella"
                        description=" This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like."
                    />
                </Grid>
                <Grid item xs={3}>
                    <DishCard
                        header="Shrimp and Chorizo Paella"
                        subHeader=""
                        image={image}
                        imageAlt="Paella"
                        description=" This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like."
                    />
                </Grid>
                <Grid item xs={3}>
                    <DishCard
                        header="Shrimp and Chorizo Paella"
                        subHeader=""
                        image={image}
                        imageAlt="Paella"
                        description=" This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like."
                    />
                </Grid>
                <Grid item xs={3}>
                    <DishCard
                        header="Shrimp and Chorizo Paella"
                        subHeader=""
                        image={image}
                        imageAlt="Paella"
                        description=" This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like."
                    />
                </Grid>
                <Grid item xs={3}>
                    <DishCard
                        header="Shrimp and Chorizo Paella"
                        subHeader=""
                        image={image}
                        imageAlt="Paella"
                        description=" This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like."
                    />
                </Grid>
                <Grid item xs={3}>
                    <DishCard
                        header="Shrimp and Chorizo Paella"
                        subHeader=""
                        image={image}
                        imageAlt="Paella"
                        description=" This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like."
                    />
                </Grid>
            </Grid>
        </Box>
    );
};
