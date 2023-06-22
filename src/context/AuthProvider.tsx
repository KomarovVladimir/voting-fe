import { ReactNode, createContext, useState } from "react";

import { User } from "shared/types/User.type";

type AuthState = {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

export const AuthContext = createContext<AuthState>({
    user: null,
    setUser: () => {},
});

type AuthProviderProps = { children: ReactNode };

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};
