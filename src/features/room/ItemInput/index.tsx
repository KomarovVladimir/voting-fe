import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { useItemInput } from "./useItemInput";
import { Input } from "./styled";

export const ItemInput = () => {
    const { item, handleAddItem, handleKeyUp, handleItemChange } =
        useItemInput();

    return (
        <Input
            id="item-input"
            value={item}
            onChange={handleItemChange}
            autoComplete="off"
            variant="standard"
            size="small"
            onKeyUp={handleKeyUp}
            InputProps={{
                disableUnderline: true,
                sx: {
                    p: ".2rem 1rem",
                    width: "100%",
                    height: "100%",
                },
                endAdornment: (
                    <>
                        {item && (
                            <IconButton onClick={handleAddItem}>
                                <AddIcon />
                            </IconButton>
                        )}
                    </>
                ),
            }}
            placeholder="Add an item..."
        />
    );
};
