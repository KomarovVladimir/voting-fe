import { GridColDef } from "@mui/x-data-grid";
import { Box, IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

import { DataTable } from "components";

import { useGetRestaurantsQuery } from "../api/restaurantsApi";

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 30 },
    { field: "name", headerName: "Name", width: 120 },
    { field: "address", headerName: "Address", width: 150 },
    { field: "votes", headerName: "Votes", width: 30 },
    {
        field: "actions",
        headerName: "",
        disableColumnMenu: true,
        sortable: false,
        flex: 1,
        renderCell: () => <Actions />,
    },
];

const Actions = () => (
    <Box>
        <IconButton edge="end" aria-label="remove">
            <ClearIcon />
        </IconButton>
    </Box>
);

export const VotingTable = () => {
    const { data: { restaurants: rows = [] } = {}, isLoading } =
        useGetRestaurantsQuery();

    return (
        <Box>
            <DataTable loading={isLoading} {...{ columns, rows }} />
        </Box>
    );
};
