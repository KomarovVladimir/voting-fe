import { Paper, Box, Grid } from "@mui/material";

import { RestaurantsList } from "./RestaurantsList";

export const VotingEditor = () => {
    return (
        <Box sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Paper sx={{ height: 500, p: 2 }}>Voting</Paper>
                </Grid>
                <Grid item xs={6}>
                    <RestaurantsList />
                </Grid>
            </Grid>
        </Box>
    );
};
