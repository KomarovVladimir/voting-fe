import {
    Box,
    Button,
    FormControl,
    Stack,
    TextField,
    Link as MuiLink,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Field, Form } from "react-final-form";

import { StyledPaper } from "components";

import { validate } from "./utils";

import { useAuth } from "../../hooks";
import { RegistrationData } from "../../api";

export const RegistrationForm = () => {
    const { handleRegister } = useAuth();

    const onSubmit = (values: RegistrationData) => {
        handleRegister(values);
    };

    return (
        <StyledPaper sx={{ width: "100%" }}>
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit }) => (
                    <Box component="form" onSubmit={handleSubmit}>
                        <Stack direction="column" spacing={2} padding={3}>
                            <FormControl required>
                                <Field
                                    name="email"
                                    render={({
                                        input: { value, onChange },
                                        meta: { touched, error },
                                    }) => (
                                        <TextField
                                            label="Email"
                                            type="email"
                                            {...{
                                                error: Boolean(
                                                    touched && error
                                                ),
                                                value,
                                                onChange,
                                            }}
                                            helperText={touched && error}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormControl required>
                                <Field
                                    name="password"
                                    render={({
                                        input: { value, onChange },
                                        meta: { touched, error },
                                    }) => (
                                        <TextField
                                            label="Password*"
                                            type="password"
                                            {...{
                                                error: Boolean(
                                                    touched && error
                                                ),
                                                value,
                                                onChange,
                                            }}
                                            helperText={touched && error}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormControl required>
                                <Field
                                    name="confirm"
                                    render={({
                                        input: { value, onChange },
                                        meta: { touched, error },
                                    }) => (
                                        <TextField
                                            label="Confirm password*"
                                            type="password"
                                            {...{
                                                error: Boolean(
                                                    touched && error
                                                ),
                                                value,
                                                onChange,
                                            }}
                                            helperText={touched && error}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormControl>
                                <Field
                                    name="firstName"
                                    render={({
                                        input: { value, onChange },
                                        meta: { touched, error },
                                    }) => (
                                        <TextField
                                            label="First name"
                                            type="text"
                                            {...{
                                                error: Boolean(
                                                    touched && error
                                                ),
                                                value,
                                                onChange,
                                            }}
                                            helperText={touched && error}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormControl>
                                <Field
                                    name="lastName"
                                    render={({
                                        input: { value, onChange },
                                        meta: { touched, error },
                                    }) => (
                                        <TextField
                                            label="Last name"
                                            type="text"
                                            {...{
                                                error: Boolean(
                                                    touched && error
                                                ),
                                                value,
                                                onChange,
                                            }}
                                            helperText={touched && error}
                                        />
                                    )}
                                />
                            </FormControl>
                            <Button variant="contained" type="submit">
                                Register
                            </Button>
                            <MuiLink component={Link} to="/">
                                I already have an account
                            </MuiLink>
                        </Stack>
                    </Box>
                )}
                {...{ validate }}
            />
        </StyledPaper>
    );
};