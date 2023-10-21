import { ChangeEvent, KeyboardEvent, useState } from "react";
import { useParams } from "react-router";

import { useAuth, AuthUser } from "features";

import {
    useDeleteItemMutation,
    useAddItemMutation,
    useVoteMutation,
    useRemoveVoteMutation,
    useGetItemsQuery,
} from "../api";

//TODO: Move the hooks
export const useItems = () => {
    const { roomId } = useParams() as { roomId: string };
    const [deleteItem] = useDeleteItemMutation();
    const [addItem] = useAddItemMutation();
    const [item, setItem] = useState("");
    const [voteRequest] = useVoteMutation();
    const [removeVoteRequest] = useRemoveVoteMutation();
    const {
        user: { id: userId },
    } = useAuth() as { user: AuthUser };
    const { data: items } = useGetItemsQuery({ roomId, userId });

    const handleItemClick = (isChosen: boolean, id: number) => () => {
        if (Boolean(isChosen)) {
            removeVoteRequest({ itemId: id, roomId: +roomId, userId });
        } else {
            voteRequest({ itemId: id, roomId: +roomId, userId });
        }
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
        handleItemClick,
        handleKeyUp,
        handleItemChange,
        handleRemoveItem,
    };
};
