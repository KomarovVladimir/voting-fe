import { IconButton, ListItemProps, ListItemText } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { statuses } from "common/statuses";
import { IItem, IRoom } from "types/roomTypes";

import { ListItem } from "./styled";

import { useItems } from "../hooks";

type ItemProps = Omit<IItem, "roomId"> & ListItemProps & Pick<IRoom, "status">;

export const Item = ({ id, name, votes, status, ...props }: ItemProps) => {
    const { handleRemoveItem } = useItems();
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
