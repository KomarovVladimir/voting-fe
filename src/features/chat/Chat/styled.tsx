import { List, ListItem, Paper, styled } from "@mui/material";

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
    paddingLeft: ".5rem",
    paddingRight: "0.4rem",

    "&::-webkit-scrollbar": {
        width: "0.4em",
    },
    "&::-webkit-scrollbar-thumb": {
        backgroundColor: "rgba(0, 0, 0, 0.20)",
        borderRadius: "0.2em",
    },
});
