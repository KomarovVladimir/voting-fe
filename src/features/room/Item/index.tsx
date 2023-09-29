import { IconButton, ListItemProps, ListItemText } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { ListItem } from "./styled";
import { useItem } from "./useItem";

import { ItemData } from "../types";

type ItemProps = Omit<ItemData, "roomId"> & ListItemProps;

export const Item = ({ id, name, votes, ...props }: ItemProps) => {
    const { handleRemoveItem } = useItem();

    return (
        <ListItem
            secondaryAction={
                <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={handleRemoveItem(id)}
                >
                    <CloseIcon />
                </IconButton>
            }
            {...props}
        >
            <ListItemText primary={name} secondary={votes} />
        </ListItem>
    );
};
