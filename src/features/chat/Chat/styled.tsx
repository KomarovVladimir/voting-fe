import { Paper, styled } from "@mui/material";

export const ChatPaper = styled(Paper)({
    height: "75vh",
    padding: 2,
    overflowY: "auto",
    borderRadius: "8px",
    border: " 1px solid rgba(255, 255, 255, 0.60)",
    background: "rgba(203, 227, 255, 0.10)",
    boxShadow: "8px 16px 24px 0px rgba(0, 0, 0, 0.16)",
    backdropFilter: "blur(8px)",
});
