import { useEffect, useState } from "react";

type localStorageData =
    | string
    | number
    | boolean
    | Record<string, any>
    | any[]
    | null;

export const useLocalStorage = (
    key: string,
    initialValue: localStorageData
) => {
    const [value, setValue] = useState<string | null>(
        JSON.parse(localStorage.getItem(key) as string) ?? initialValue
    );

    useEffect(() => {
        if (value) {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }, [key, value]);

    const removeItem = () => {
        localStorage.removeItem("test");
        setValue(null);
    };

    return { value, setValue, removeItem };
};
