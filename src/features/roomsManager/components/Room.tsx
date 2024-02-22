import { Avatar } from "@mui/material";

import { ListItem } from "components";
import { stringAvatar } from "lib";

import { useRoomCard } from "../hooks";

export type RoomProps = {
    id: number;
    imgSrc?: string;
    name: string;
};

//TODO: Add area attributes
//TODO: Move and style the menu
//TODO: Add an deleting alert dialog
//TODO: Make the whole card clickable
export const Room = ({ id, imgSrc, name }: RoomProps) => {
    const { handleNavigate } = useRoomCard(id);

    return (
        <ListItem
            onClick={handleNavigate}
            icon={
                imgSrc ? (
                    <Avatar src={imgSrc} />
                ) : (
                    <Avatar {...stringAvatar(name)} />
                )
            }
        />
    );
};
