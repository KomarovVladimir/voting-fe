import { Box, Grid } from "@mui/material";

import { DataTable } from "components";

export const Users = () => (
    <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <DataTable />
            </Grid>
        </Grid>
    </Box>
);
