import { Box, Grid } from "@mui/material";

import { UsersTable } from "features/adminPanel";

export const Users = () => (
    <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <UsersTable />
            </Grid>
        </Grid>
    </Box>
);
