import { List, ListItem, Paper, TextField, styled } from "@mui/material";

export const Input = styled(TextField)({
    display: "flex",
    flexShrink: 0,
    alignItems: "center",
    height: "3rem",
    border: "none",
    borderRadius: "8px",
    background: "rgba(0, 0, 0, 0.20)",
});

export const ChatPaper = styled(Paper)({
    display: "flex",
    flexDirection: "column",
    gap: ".5rem",
    justifyContent: "space-between",
    height: "inherit",
    padding: ".75rem 1rem",
    overflowY: "auto",
    borderRadius: "8px",
    border: " 1px solid #383c47",
    background: "rgba(203, 227, 255, 0.10)",
    boxShadow: "8px 16px 24px 0px rgba(0, 0, 0, 0.16)",
    backdropFilter: "blur(8px)",
});

export const Message = styled(ListItem)({
    alignItems: "start",
    justifyContent: "start",
    maxWidth: "80%",
});

export const MessageContent = styled("div")({
    padding: ".6rem .75rem",
    borderRadius: "0 8px 8px 8px",
    background: "rgba(203, 227, 255, 0.10)",
});

export const MessageHeader = styled("div")({
    display: "flex",
    flexWrap: "nowrap",
    alignItems: "center",
    gap: "4px",
});

export const ChatBox = styled(List)({
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    overflowY: "auto",

    "&::-webkit-scrollbar": {
        width: "0.4em",
    },
    "&::-webkit-scrollbar-thumb": {
        backgroundColor: "rgba(0, 0, 0, 0.20)",
        borderRadius: "0.2em",
    },
});
