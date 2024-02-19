import styled from "@emotion/styled";
import { Paper } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const Item = styled(Paper)(() => ({
    textAlign: "center",
    padding: 2,
    height: "100%"
}));

export const MainLayout = () => (
    <Grid container spacing={2} marginX={1} height="100%">
        <Grid xs={2} height="100%">
            <Item>xs=8</Item>
        </Grid>
        <Grid xs={8} height="100%">
            <Item>xs=4</Item>
        </Grid>
        <Grid xs={2} height="100%">
            <Item>xs=4</Item>
        </Grid>
    </Grid>
);
