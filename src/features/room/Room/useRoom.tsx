import { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "react-router";

import {
    useAddItemMutation,
    useDeleteItemMutation,
    useLazyGetItemsQuery,
} from "../roomApi";

export const useRoom = () => {
    const { roomId } = useParams();
    const [getItems, { data: itemsData }] = useLazyGetItemsQuery();
    const [addItem] = useAddItemMutation();
    const [deleteItem] = useDeleteItemMutation();
    const [item, setItem] = useState("");

    useEffect(() => {
        if (roomId) {
            getItems(roomId);
        }
    }, [roomId, getItems]);

    const handleAddItem = () => {
        addItem({
            roomId,
            name: "New Item",
        });
    };

    const handleRemoveItem = (id: string) => () => {
        deleteItem(id);
    };

    const handleItemChange = (e: ChangeEvent<HTMLInputElement>) => {
        setItem(e.target.value);
    };

    return {
        item,
        items: itemsData?.items,
        handleAddItem,
        handleRemoveItem,
        handleItemChange,
    };
};
