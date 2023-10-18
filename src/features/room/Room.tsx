import { Grid, List } from "@mui/material";

import { Chat } from "features";
import { PageWrapper } from "components";
import { statuses } from "common/statuses";

import { Item } from "./Item";
import { RoomAppBar } from "./RoomAppBar";
import { ItemInput } from "./ItemInput";
import { useItems, useRoom } from "./hooks";

export const Room = () => {
    const { status } = useRoom();
    const { items = [] } = useItems();
    const showInput = Boolean(status === statuses[0] && items.length < 10);

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
                        {items?.map(({ id, name, votes, voted }) => (
                            <Item
                                key={id}
                                {...{ id, name, votes, status, voted }}
                            />
                        ))}
                    </List>
                    {showInput && <ItemInput />}
                </Grid>
                <Grid item xs={6} sx={{ height: "100%" }}>
                    <Chat />
                </Grid>
            </Grid>
        </PageWrapper>
    );
};
