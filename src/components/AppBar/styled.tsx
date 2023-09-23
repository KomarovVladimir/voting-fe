import { Typography, Toolbar as MuiToolbar, styled } from "@mui/material";

export const Title = styled(Typography)({
    textDecoration: "none",
    boxShadow: "none",
    fontSize: "2rem",
    color: "white",
    "&:hover": {
        color: "primary.main",
    },
});

export const Toolbar = styled(MuiToolbar)({
    justifyContent: "space-between",
});
