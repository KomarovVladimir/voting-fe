import { createContext } from "react";

import { User } from "types/User.type";

type AuthState = {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

export const AuthContext = createContext<AuthState>({
    user: null,
    setUser: () => {},
});
