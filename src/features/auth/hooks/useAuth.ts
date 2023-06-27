import { useContext, useEffect } from "react";

import { useLocalStorage } from "utils/useLocalStorage";
import { User } from "types/User.type";

import { AuthContext } from "../context/AuthContext";
import {
    AuthData,
    useLoginRequestMutation,
    useLogoutRequestMutation,
} from "../api/authApi";

export const useAuth = () => {
    const { user, setUser } = useContext(AuthContext);
    const { value, setValue, removeItem } = useLocalStorage("user");
    const [loginRequest] = useLoginRequestMutation();
    const [logoutRequest] = useLogoutRequestMutation();

    useEffect(() => {
        setUser(value ? JSON.parse(value) : null);
    }, [setUser, value]);

    const handleLogin = (data: AuthData) => () => {
        loginRequest(data)
            .unwrap()
            .then((payload) => {
                setValue(JSON.stringify(payload));
            })
            .catch((error) => console.error("An error occurred", error));
    };

    const handleLogout = () => {
        logoutRequest(user as User)
            .unwrap()
            .then(() => {
                removeItem();
            })
            .catch((error) => console.error("An error occurred", error));
    };

    const handleRegister = () => {};

    return { user, handleLogin, handleRegister, handleLogout };
};
