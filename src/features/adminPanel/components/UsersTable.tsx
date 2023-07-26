import { GridColDef } from "@mui/x-data-grid";
import { Box, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";

import { DataTable } from "components";

import { useGetUsersListQuery } from "../api/usersApi";

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "role", headerName: "Role", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
        field: "actions",
        headerName: "",
        disableColumnMenu: true,
        sortable: false,
        flex: 1,
        renderCell: () => <Actions />,
    },
];

//TODO: Put the actions into the table component
const Actions = () => (
    <Box>
        <IconButton aria-label="menu">
            <EditIcon />
        </IconButton>
        <IconButton edge="end" aria-label="remove">
            <ClearIcon />
        </IconButton>
    </Box>
);
export const UsersTable = () => {
    const { data: { users: rows = [] } = {}, isLoading } =
        useGetUsersListQuery();

    return (
        <Box maxWidth={700} minWidth={450}>
            <DataTable loading={isLoading} {...{ columns, rows }} />
        </Box>
    );
};
