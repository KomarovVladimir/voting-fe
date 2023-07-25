import { GridColDef } from "@mui/x-data-grid";
import { Box } from "@mui/material";

import { DataTable } from "components";

import { useGetRestaurantsQuery } from "../api/restaurantsApi";

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 30 },
    { field: "name", headerName: "Name", width: 120 },
    { field: "address", headerName: "Address", width: 150 },
    { field: "votes", headerName: "Votes", width: 30 },
];

export const VotingTable = () => {
    const { data: { restaurants: rows = [] } = {}, isLoading } =
        useGetRestaurantsQuery();

    return (
        <Box>
            <DataTable loading={isLoading} {...{ columns, rows }} />
        </Box>
    );
};
