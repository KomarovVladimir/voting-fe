import { useContext, useEffect } from "react";

import { useLocalStorage } from "utils/useLocalStorage";

import { AuthContext } from "../context/AuthContext";
import {
    AuthData,
    useLoginRequestMutation,
    useLogoutRequestMutation,
} from "../services/authApi";

export const useAuth = () => {
    const { user, setUser } = useContext(AuthContext);
    const { value, setValue, removeItem } = useLocalStorage("user");
    const [loginRequest] = useLoginRequestMutation();
    const [logoutRequest] = useLogoutRequestMutation();

    useEffect(() => {
        if (value) {
            setUser(JSON.parse(value));
        }
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
        logoutRequest({})
            .unwrap()
            .then(() => {
                removeItem();
            })
            .catch((error) => console.error("An error occurred", error));
    };

    const handleRegister = () => {};

    return { user, handleLogin, handleRegister, handleLogout };
};
