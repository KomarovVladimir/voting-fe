import { IconButton, ListItemProps, ListItemText } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { statuses } from "common/statuses";

import { ListItem } from "./styled";
import { useItem } from "./useItem";

import { ItemData, Room } from "../types";

type ItemProps = Omit<ItemData, "roomId"> &
    ListItemProps &
    Pick<Room, "status">;

export const Item = ({ id, name, votes, status, ...props }: ItemProps) => {
    const { handleRemoveItem } = useItem();
    const disabled = status === statuses[2];

    return (
        <ListItem
            secondaryAction={
                <>
                    {status === statuses[0] && (
                        <IconButton
                            edge="end"
                            aria-label="delete"
                            onClick={handleRemoveItem(id)}
                        >
                            <CloseIcon />
                        </IconButton>
                    )}
                </>
            }
            {...{ props, disabled }}
        >
            <ListItemText primary={name} secondary={votes} />
        </ListItem>
    );
};
