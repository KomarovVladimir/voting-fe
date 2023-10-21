import { IconButton, ListItemText } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { statuses } from "common/statuses";
import { IItem, IRoom } from "types/roomTypes";

import { ListItemButton } from "./styled";

import { useItems } from "../hooks";

type ItemProps = Omit<IItem, "roomId"> & Pick<IRoom, "status">;

export const Item = ({ id, name, votes, status, voted }: ItemProps) => {
    const { handleItemClick, handleRemoveItem } = useItems();
    const disabled = status === statuses[2];

    return (
        <ListItemButton
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
            onClick={handleItemClick(voted, id)}
            {...{ disabled }}
        >
            <ListItemText primary={name} secondary={votes} />
        </ListItemButton>
    );
};
