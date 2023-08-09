import { Button, Grid, Paper, Stack, Typography, styled } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

export const Rooms = () => {
    return (
        <>
            <Stack direction="row" gap={5} alignItems="center" mb={4}>
                <Typography variant="h2">Rooms</Typography>
                <Button variant="contained">+ New room</Button>
            </Stack>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Item>Restaurants</Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>Movies</Item>
                </Grid>
            </Grid>
        </>
    );
};
