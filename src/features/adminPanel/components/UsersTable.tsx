import { Box, Grid } from "@mui/material";

import { DataTable } from "components";

import { useGetUsersListQuery } from "../api/usersApi";

export const UsersTable = () => {
    const { data, isFetching, isLoading } = useGetUsersListQuery();
    console.log(123123, data, isFetching, isLoading);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <DataTable />
                </Grid>
            </Grid>
        </Box>
    );
};
