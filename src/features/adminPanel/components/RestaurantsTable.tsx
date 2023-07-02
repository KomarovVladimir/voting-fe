import { GridColDef } from "@mui/x-data-grid";
import { Box } from "@mui/material";

import { DataTable } from "components";

import { useGetRestaurantsQuery } from "../api/restaurantsApi";

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "address", headerName: "Address", width: 150 },
    { field: "votes", headerName: "Votes", width: 100 },
    { field: "numberOfDishes", headerName: "Number of dishes", width: 150 },
];

export const RestaurantsTable = () => {
    const { data: { restaurants: rows = [] } = {}, isLoading } =
        useGetRestaurantsQuery();

    return (
        <Box maxWidth={750}>
            <DataTable loading={isLoading} {...{ columns, rows }} />
        </Box>
    );
};
