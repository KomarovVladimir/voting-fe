import { useDeleteItemMutation } from "../roomApi";

export const useItem = () => {
    const [deleteItem] = useDeleteItemMutation();

    const handleRemoveItem = (id: string) => () => {
        deleteItem(id);
    };

    return {
        handleRemoveItem,
    };
};
