export const validate = ({
    firstName,
    lastName,
    email,
    password,
    confirm,
}: Record<string, string>) => {
    const errors = {} as Record<string, string>;

    if (!email) {
        errors.email = "Required";
    }
    if (!password) {
        errors.password = "Required";
    }
    if (!confirm) {
        errors.confirm = "Required";
    } else if (confirm !== password) {
        errors.confirm = "The password confirmation does not match";
    }
    if (!firstName) {
        errors.firstName = "Required";
    }
    if (!lastName) {
        errors.lastName = "Required";
    }
    return errors;
};
