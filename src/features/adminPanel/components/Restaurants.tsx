import { GridColDef, DataGrid } from "@mui/x-data-grid";

import { useGetRestaurantsQuery } from "../api/restaurantsApi";

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "address", headerName: "Address", width: 130 },
    { field: "votes", headerName: "Votes", width: 130 },
    { field: "numberOfDishes", headerName: "Number of dishes", width: 70 },
];

export const RestaurantsTable = () => {
    const { data } = useGetRestaurantsQuery();

    return (
        <DataGrid
            rows={data?.restaurants || []}
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
