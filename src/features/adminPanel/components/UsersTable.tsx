import { GridColDef } from "@mui/x-data-grid";

import { useGetUsersListQuery } from "../api/usersApi";
import { DataTable } from "components";
import { Box } from "@mui/material";

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "role", headerName: "Role", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
];

export const UsersTable = () => {
    const { data: { users: rows = [] } = {}, isLoading } =
        useGetUsersListQuery();

    return (
        <Box maxWidth={700} minWidth={450}>
            <DataTable loading={isLoading} {...{ columns, rows }} />
        </Box>
    );
};
