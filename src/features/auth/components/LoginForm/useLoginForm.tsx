import { useContext, useEffect } from "react";

import { useAuthRequestMutation } from "services/api/authApi";
import { AuthContext } from "features/auth/context/AuthContext";
import { useLocalStorage } from "utils/useLocalStorage";

const testAuthData = { email: "admin@email.com", password: "admin" };

export const useLoginForm = () => {
    const { setUser } = useContext(AuthContext);
    const [authRequest, result] = useAuthRequestMutation();
    const { value, setValue } = useLocalStorage("user");

    useEffect(() => {
        setValue(JSON.stringify(result.data));
        setUser(value ? JSON.parse(value) : null);
    }, [result.data, setUser, setValue, value]);

    const handleLogin = () => {
        authRequest(testAuthData);
    };

    return { handleLogin, result };
};
