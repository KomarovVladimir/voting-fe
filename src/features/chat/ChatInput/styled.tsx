import { TextField, styled } from "@mui/material";

export const Input = styled(TextField)({
    display: "flex",
    flexShrink: 0,
    alignItems: "center",
    height: "3rem",
    border: "none",
    borderRadius: "8px",
    background: "rgba(0, 0, 0, 0.20)",
});
