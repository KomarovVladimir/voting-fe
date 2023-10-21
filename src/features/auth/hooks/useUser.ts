import { useContext } from "react";

import { useLocalStorage } from "common/hooks";

import { AuthContext } from "../context/AuthContext";
import { AuthUser } from "../types";

export const useUser = () => {
    const { user, setUser } = useContext(AuthContext);
    const { setItem, removeItem } = useLocalStorage("user");

    const addUser = (user: AuthUser) => {
        setUser(user);
        setItem(JSON.stringify(user));
    };

    const removeUser = () => {
        setUser(null);
        removeItem();
    };

    return { user, addUser, removeUser };
};
