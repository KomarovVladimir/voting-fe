import { useEffect } from "react";
import { useAuthRequestMutation } from "services/authApi";

const testAuthData = { email: "admin@email.com", password: "admin" };

export const useAuth = () => {
    const [authRequest, result] = useAuthRequestMutation();

    useEffect(() => {
        authRequest(testAuthData);
    }, []);

    return { authRequest, result };
};
