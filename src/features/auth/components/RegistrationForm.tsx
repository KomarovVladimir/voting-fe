import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    Stack,
    TextField,
    Link as MuiLink,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Field, Form } from "react-final-form";

import { StyledPaper } from "components";

import { useAuth } from "../hooks";
import { RegistrationData } from "../api";

export const RegistrationForm = () => {
    const { handleRegister } = useAuth();

    const onSubmit = (values: RegistrationData) => {
        handleRegister(values);
    };

    return (
        <StyledPaper sx={{ width: "100%" }}>
            <Form
                onSubmit={onSubmit}
                // validate={validate}
                render={({ handleSubmit }) => (
                    <Box component="form" onSubmit={handleSubmit}>
                        <Stack direction="column" spacing={2} padding={3}>
                            <FormControl required>
                                <Field
                                    name="email"
                                    render={({
                                        input: { value, onChange },
                                    }) => (
                                        <TextField
                                            label="Email"
                                            type="email"
                                            {...{ value, onChange }}
                                        />
                                    )}
                                />
                                <FormHelperText>Email helper</FormHelperText>
                            </FormControl>
                            <FormControl required>
                                <Field
                                    name="password"
                                    render={({
                                        input: { value, onChange },
                                    }) => (
                                        <TextField
                                            label="Password*"
                                            type="password"
                                            {...{ value, onChange }}
                                        />
                                    )}
                                />
                                <FormHelperText>Password helper</FormHelperText>
                            </FormControl>
                            <FormControl required>
                                <Field
                                    name="confirmPassword"
                                    render={({
                                        input: { value, onChange },
                                    }) => (
                                        <TextField
                                            label="Confirm password*"
                                            type="password"
                                            {...{ value, onChange }}
                                        />
                                    )}
                                />
                                <FormHelperText>
                                    Confirm password helper
                                </FormHelperText>
                            </FormControl>
                            <FormControl>
                                <Field
                                    name="firstName"
                                    render={({
                                        input: { value, onChange },
                                    }) => (
                                        <TextField
                                            label="First name"
                                            type="text"
                                            {...{ value, onChange }}
                                        />
                                    )}
                                />
                                <FormHelperText>
                                    First name helper
                                </FormHelperText>
                            </FormControl>
                            <FormControl>
                                <Field
                                    name="lastName"
                                    render={({
                                        input: { value, onChange },
                                    }) => (
                                        <TextField
                                            label="Last name"
                                            type="text"
                                            {...{ value, onChange }}
                                        />
                                    )}
                                />
                                <FormHelperText>
                                    Last name helper
                                </FormHelperText>
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
            />
        </StyledPaper>
    );
};
