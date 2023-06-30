import { useContext } from "react";

import { useLocalStorage } from "hooks/useLocalStorage";

import { AuthContext } from "../context/AuthContext";
import { UserData } from "../types/UserData.type";

export const useUser = () => {
    const { user, setUser } = useContext(AuthContext);
    const { setItem, removeItem } = useLocalStorage("user");

    const addUser = (user: UserData) => {
        setUser(user);
        setItem(JSON.stringify(user));
    };

    const removeUser = () => {
        setUser(null);
        removeItem();
    };

    return { user, addUser, removeUser };
};
