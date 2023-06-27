import { useEffect, useState } from "react";

export const useLocalStorage = (key: string, initialValue?: string) => {
    const [value, setValue] = useState<string | null>(
        (localStorage.getItem(key) as string) ?? initialValue
    );

    useEffect(() => {
        if (value) {
            localStorage.setItem(key, value);
        }
    }, [key, value]);

    const removeItem = () => {
        localStorage.removeItem(key);
        setValue(null);
    };

    return { value, setValue, removeItem };
};
