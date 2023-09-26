export const validate = ({ email, password }: Record<string, string>) => {
    const errors = {} as Record<string, string>;

    if (!email) {
        errors.email = "Required";
    }
    if (!password) {
        errors.password = "Required";
    }

    return errors;
};
