import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { useParams } from "react-router";

import {
    useAddItemMutation,
    useDeleteItemMutation,
    useLazyGetItemsQuery,
} from "../roomApi";

export const useItems = () => {
    const { roomId } = useParams();
    const [getItems, { data: response }] = useLazyGetItemsQuery();
    const [deleteItem] = useDeleteItemMutation();
    const [addItem] = useAddItemMutation();
    const [item, setItem] = useState("");

    useEffect(() => {
        if (roomId) {
            getItems(roomId);
        }
    }, [roomId, getItems]);

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
        items: response?.data,
        handleAddItem,
        handleKeyUp,
        handleItemChange,
        handleRemoveItem,
    };
};
