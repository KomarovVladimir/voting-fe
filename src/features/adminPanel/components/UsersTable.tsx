import { DataGrid, GridColDef } from "@mui/x-data-grid";

import { useGetUsersListQuery } from "../api/usersApi";

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "role", headerName: "Role", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
];

export const UsersTable = () => {
    const { data } = useGetUsersListQuery();

    console.log(data);

    return (
        <DataGrid
            rows={data?.users || []}
            columns={columns}
            initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
        />
    );
};
