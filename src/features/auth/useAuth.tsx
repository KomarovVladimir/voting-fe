import { useContext, useEffect } from "react";
import { useAuthRequestMutation } from "api/authApi";

import { useLocalStorage } from "utils/useLocalStorage";
import { AuthContext } from "context/AuthProvider";

const testAuthData = { email: "admin@email.com", password: "admin" };

export const useAuth = () => {
    const { user, setUser } = useContext(AuthContext);
    const [authRequest, result] = useAuthRequestMutation();
    const { value, setValue } = useLocalStorage("user");

    useEffect(() => {
        authRequest(testAuthData);
    }, [authRequest]);

    useEffect(() => {
        setValue(JSON.stringify(result.data));
        setUser(value ? JSON.parse(value) : null);
    }, [result.data, setUser, setValue, value]);

    return { authRequest, result };
};
