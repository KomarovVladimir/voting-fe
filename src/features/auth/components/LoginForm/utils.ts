import { ILoginForm } from ".";

export const validate = ({ email, password }: ILoginForm) => {
    const errors = {} as Record<string, string>;

    if (!email) {
        errors.email = "Required";
    }
    if (!password) {
        errors.password = "Required";
    }

    return errors;
};
