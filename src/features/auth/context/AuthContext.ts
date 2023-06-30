import { createContext } from "react";

import { UserData } from "../types/UserData.type";

type AuthState = {
    user: UserData | null;
    setUser: React.Dispatch<React.SetStateAction<UserData | null>>;
};

export const AuthContext = createContext<AuthState>({
    user: null,
    setUser: () => {},
});
