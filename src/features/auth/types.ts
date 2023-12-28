import { Dispatch, SetStateAction } from "react";

export type UserSignInData = {
    email: string;
    password: string;
};

export type UserSignUpData = {
    email: string;
    password: string;
    confirmation: string;
    firstName: string;
    lastName: string;
};

export type AuthUser = {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    avatar?: string;
};

export type AuthState = {
    user: AuthUser | null;
    setUser: Dispatch<SetStateAction<AuthUser | null>>;
};
