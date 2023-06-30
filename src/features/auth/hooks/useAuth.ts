import { useContext, useEffect } from "react";

import { useLocalStorage } from "hooks/useLocalStorage";

import {
    AuthData,
    useLoginRequestMutation,
    useLogoutRequestMutation,
} from "../api/authApi";

import { useUser } from "./useUser";
import { UserData } from "../types/UserData.type";

export const useAuth = () => {
    const { user, addUser, removeUser } = useUser();
    const { getItem } = useLocalStorage("user");
    const [loginRequest] = useLoginRequestMutation();
    const [logoutRequest] = useLogoutRequestMutation();

    useEffect(() => {
        const user = getItem();

        if (user) {
            addUser(user);
        }
    }, []);

    const handleLogin = (data: AuthData) => {
        loginRequest(data)
            .unwrap()
            .then(({ data }) => {
                addUser(data as UserData);
            })
            .catch((error) => console.error("An error occurred", error));
    };

    const handleLogout = () => {
        if (user?.email) {
            logoutRequest({ email: user?.email })
                .unwrap()
                .then(() => {
                    removeUser();
                })
                .catch((error) => console.error("An error occurred", error));
        }
    };

    const handleRegister = () => {};

    return { user, handleLogin, handleRegister, handleLogout };
};
