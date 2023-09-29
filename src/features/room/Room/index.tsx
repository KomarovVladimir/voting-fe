import { Grid, List } from "@mui/material";

import { Chat } from "features";
import { PageWrapper } from "components";

import { useRoom } from "./useRoom";

import { Item } from "../Item";
import { RoomAppBar } from "../RoomAppBar";
import { ItemInput } from "../ItemInput";

export const Room = () => {
    const { items } = useRoom();

    return (
        <PageWrapper>
            <RoomAppBar />
            <Grid
                container
                spacing={2}
                rowSpacing="0"
                sx={{ height: "calc(100vh - 10rem)" }}
            >
                <Grid item xs={6}>
                    <List dense disablePadding>
                        {items?.map(({ id, name, votes }) => (
                            <Item key={id} {...{ id, name, votes }} />
                        ))}
                    </List>
                    {items && items.length < 10 && <ItemInput />}
                </Grid>
                <Grid item xs={6} sx={{ height: "100%" }}>
                    <Chat />
                </Grid>
            </Grid>
        </PageWrapper>
    );
};
