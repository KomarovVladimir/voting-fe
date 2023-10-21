import {
    ListItemProps,
    ListItemButton as MuiListItemButton,
    styled,
} from "@mui/material";

export const ListItemButton = styled(MuiListItemButton)<
    ListItemProps & { disabled?: boolean }
>(({ theme, disabled }) => ({
    borderRadius: ".5rem",
    marginBottom: "1rem",
    border: " 1px solid #383c47",
    background: "rgba(203, 227, 255, 0.10)",
    boxShadow: "8px 16px 24px 0px rgba(0, 0, 0, 0.16)",
    backdropFilter: "blur(8px)",
    cursor: disabled ? "default" : "pointer",

    "&:hover": {
        textDecoration: "none",
        backgroundColor: theme.palette.action.hover,
        "@media (hover: none)": {
            backgroundColor: "transparent",
        },
    },
}));
