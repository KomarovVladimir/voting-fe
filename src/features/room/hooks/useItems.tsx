import { ChangeEvent, KeyboardEvent, useState } from "react";
import { useParams } from "react-router";

import {
    useAddItemMutation,
    useDeleteItemMutation,
    useGetItemsQuery,
} from "../roomApi";

export const useItems = () => {
    const { roomId } = useParams() as { roomId: string };
    const { data: items } = useGetItemsQuery(roomId);
    const [deleteItem] = useDeleteItemMutation();
    const [addItem] = useAddItemMutation();
    const [item, setItem] = useState("");

    const handleKeyUp = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "Enter") {
            handleAddItem();
        }
    };

    const handleAddItem = () => {
        if (item) {
            addItem({
                roomId,
                name: item,
            });
            setItem("");
        }
    };

    const handleItemChange = (e: ChangeEvent<HTMLInputElement>) => {
        setItem(e.target.value);
    };

    const handleRemoveItem = (id: string) => () => {
        deleteItem(id);
    };

    return {
        item,
        items,
        handleAddItem,
        handleKeyUp,
        handleItemChange,
        handleRemoveItem,
    };
};
