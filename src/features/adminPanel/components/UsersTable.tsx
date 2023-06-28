import { DataGrid, GridColDef, GridRowSelectionModel } from "@mui/x-data-grid";

import { useGetUsersListQuery } from "../api/usersApi";

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "role", headerName: "Role", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
];

export const UsersTable = () => {
    const { data: { users: rows } = {} } = useGetUsersListQuery();

    const handleSelection = (ids: GridRowSelectionModel) => {
        if (rows) {
            const selectedIDs = new Set(ids);
            const selectedRowData = rows.filter((row) =>
                selectedIDs.has(row.id.toString())
            );
            console.log(selectedRowData);
        }
    };

    return (
        <DataGrid
            rows={rows || []}
            columns={columns}
            initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                },
            }}
            onRowSelectionModelChange={handleSelection}
            pageSizeOptions={[5, 10]}
            checkboxSelection
        />
    );
};
