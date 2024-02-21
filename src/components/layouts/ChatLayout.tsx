import Grid from "@mui/material/Unstable_Grid2";
import { ReactNode } from "react";

type ChatLayoutProps = {
    left?: ReactNode;
    center?: ReactNode;
    right?: ReactNode;
};

export const ChatLayout = ({ left, center, right }: ChatLayoutProps) => (
    <Grid container spacing={2} marginX={1} height="100%">
        <Grid xs={1} height="100%">
            {left}
        </Grid>
        <Grid xs={9} height="100%">
            {center}
        </Grid>
        <Grid xs={2} height="100%">
            {right}
        </Grid>
    </Grid>
);
