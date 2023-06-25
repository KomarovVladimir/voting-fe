import { ReactNode, useState } from "react";

import { User } from "types/User.type";

import { AuthContext } from "./AuthContext";

type AuthProviderProps = { children: ReactNode };

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};
