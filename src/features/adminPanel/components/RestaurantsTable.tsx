import { GridColDef } from "@mui/x-data-grid";

import { DataTable } from "components";

import { useGetRestaurantsQuery } from "../api/restaurantsApi";

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 130 },
    { field: "address", headerName: "Address", width: 130 },
    { field: "votes", headerName: "Votes", width: 130 },
    { field: "numberOfDishes", headerName: "Number of dishes", width: 70 },
];

export const RestaurantsTable = () => {
    const { data: { restaurants: rows = [] } = {}, isLoading } =
        useGetRestaurantsQuery();

    return <DataTable loading={isLoading} {...{ columns, rows }} />;
};
