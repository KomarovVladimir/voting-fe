import { useContext } from "react";

import { useLocalStorage } from "hooks/useLocalStorage";

import { AuthContext } from "../context/AuthContext";
import { IUser } from "../types/types";

export const useUser = () => {
    const { user, setUser } = useContext(AuthContext);
    const { setItem, removeItem } = useLocalStorage("user");

    const addUser = (user: IUser) => {
        setUser(user);
        setItem(JSON.stringify(user));
    };

    const removeUser = () => {
        setUser(null);
        removeItem();
    };

    return { user, addUser, removeUser };
};
