import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { useParams } from "react-router";

import {
    useAddItemMutation,
    useDeleteItemMutation,
    useLazyGetItemsQuery,
} from "../roomApi";

export const useItemInput = () => {
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

    const handleRemoveItem = (id: string) => () => {
        deleteItem(id);
    };

    const handleItemChange = (e: ChangeEvent<HTMLInputElement>) => {
        setItem(e.target.value);
    };

    return {
        item,
        items: itemsData?.items,
        handleRemoveItem,
        handleAddItem,
        handleKeyUp,
        handleItemChange,
    };
};
