import { Dispatch, SetStateAction, createContext } from "react";

import { IUser } from "../types/types";

type AuthState = {
    user: IUser | null;
    setUser: Dispatch<SetStateAction<IUser | null>>;
};

export const AuthContext = createContext<AuthState>({
    user: null,
    setUser: () => {},
});
