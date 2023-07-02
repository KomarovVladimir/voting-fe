import {
    DataGrid,
    DataGridProps,
    GridRowSelectionModel,
} from "@mui/x-data-grid";

type DataTableProps = {
    clickable?: boolean;
} & DataGridProps;

export const DataTable = ({
    rows = [],
    columns = [],
    ...props
}: DataTableProps) => {
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
            sx={{
                ".MuiDataGrid-cell:focus": {
                    outline: "none",
                },
                "& .MuiDataGrid-row:hover": {
                    cursor: "pointer",
                },
            }}
            rows={rows}
            columns={columns}
            initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                },
            }}
            onRowSelectionModelChange={handleSelection}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            {...props}
        />
    );
};
