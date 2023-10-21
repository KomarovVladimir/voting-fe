import { useEffect } from "react";
import { useNavigate } from "react-router";

import { useLocalStorage } from "hooks/useLocalStorage";

import { useUser } from "./useUser";

import {
    useLoginRequestMutation,
    useLogoutRequestMutation,
    useRegistrationRequestMutation,
} from "../api/authApi";
import { AuthUser, UserSignInData, UserSignUpData } from "../types";

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

    const handleLogin = (data: UserSignInData) => {
        loginRequest(data)
            .unwrap()
            .then((data) => {
                addUser(data as AuthUser);
            })
            .catch((error) => console.error("An error occurred", error));
    };

    const handleLogout = () => {
        if (user?.email) {
            logoutRequest(user?.email)
                .unwrap()
                .then(() => {
                    removeUser();
                })
                .catch((error) => console.error("An error occurred", error));
        }
    };

    const handleRegister = (data: UserSignUpData) => {
        registrationRequest(data)
            .then(() => {
                navigate(`/`);
            })
            .catch((error) => console.error("An error occurred", error));
    };

    return { user, handleLogin, loginResult, handleRegister, handleLogout };
};
