import { useEffect } from "react";
import { useNavigate } from "react-router";

import { useLocalStorage } from "hooks/useLocalStorage";

import {
    IAuthData,
    IRegistrationData,
    useLoginRequestMutation,
    useLogoutRequestMutation,
    useRegistrationRequestMutation,
} from "../api/authApi";
import { useUser } from "./useUser";
import { IUser } from "../types/types";

//TODO: Use async
export const useAuth = () => {
    const { user, addUser, removeUser } = useUser();
    const { getItem } = useLocalStorage("user");
    const navigate = useNavigate();
    const [loginRequest, loginResult] = useLoginRequestMutation();
    const [registrationRequest] = useRegistrationRequestMutation();
    const [logoutRequest] = useLogoutRequestMutation();

    useEffect(() => {
        const user = getItem();

        if (user) {
            addUser(user);
        }
    }, []);

    const handleLogin = (data: IAuthData) => {
        loginRequest(data)
            .unwrap()
            .then((data) => {
                addUser(data as IUser);
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

    const handleRegister = (data: IRegistrationData) => {
        registrationRequest(data)
            .then(() => {
                navigate(`/`);
            })
            .catch((error) => console.error("An error occurred", error));
    };

    return { user, handleLogin, loginResult, handleRegister, handleLogout };
};
