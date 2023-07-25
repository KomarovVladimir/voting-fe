import { Paper, Box, Grid, Typography } from "@mui/material";

import { RestaurantsList } from "./RestaurantsList";
import { VotingList } from "./VotingList";

export const VotingEditor = () => {
    return (
        <Box sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Box maxWidth={400}>
                        <VotingList />
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Paper sx={{ p: 2 }}>
                        <RestaurantsList />
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};
