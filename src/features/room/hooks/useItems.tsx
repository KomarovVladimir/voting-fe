import { ChangeEvent, KeyboardEvent, useState } from "react";
import { useParams } from "react-router";

import { useAuth } from "features/auth";
import { IUser } from "features/auth/types/types";

import {
    useAddItemMutation,
    useDeleteItemMutation,
    useGetItemsQuery,
    useVoteMutation,
} from "../roomApi";

//TODO: Move the hooks
export const useItems = () => {
    const { roomId } = useParams() as { roomId: string };
    const { data: items } = useGetItemsQuery(roomId);
    const [deleteItem] = useDeleteItemMutation();
    const [addItem] = useAddItemMutation();
    const [item, setItem] = useState("");
    const [voteRequest] = useVoteMutation();
    const {
        user: { id: userId },
    } = useAuth() as { user: IUser };

    const handleVote = (id: number) => () => {
        voteRequest({ itemId: id, roomId: Number(roomId), userId });
    };

    const handleKeyUp = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "Enter") {
            handleAddItem();
        }
    };

    const handleAddItem = () => {
        if (item) {
            addItem({ roomId, name: item });
            setItem("");
        }
    };

    const handleItemChange = (e: ChangeEvent<HTMLInputElement>) => {
        setItem(e.target.value);
    };

    const handleRemoveItem = (id: number) => () => {
        deleteItem({ roomId, id });
    };

    return {
        item,
        items,
        handleAddItem,
        handleVote,
        handleKeyUp,
        handleItemChange,
        handleRemoveItem,
    };
};
