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
import { Form, Field } from "react-final-form";

import { StyledPaper } from "components";

import { useAuth } from "../hooks/useAuth";
import { AuthData } from "../api/authApi";

export const LoginForm = () => {
    const { handleLogin } = useAuth();

    const onSubmit = (values: AuthData) => {
        handleLogin(values);
    };

    return (
        <StyledPaper sx={{ width: "100%" }}>
            <Form
                onSubmit={onSubmit}
                // validate={validate}
                initialValues={{
                    email: "test@email.com",
                    password: "testpassword123123",
                }}
                render={({ handleSubmit }) => (
                    <Box component="form" onSubmit={handleSubmit}>
                        <Stack direction="column" spacing={2} padding={3}>
                            <FormControl>
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
                            <FormControl>
                                <Field
                                    name="password"
                                    render={({
                                        input: { value, onChange },
                                    }) => (
                                        <TextField
                                            label="Password"
                                            type="password"
                                            {...{ value, onChange }}
                                        />
                                    )}
                                />
                                <FormHelperText>Password helper</FormHelperText>
                            </FormControl>
                            <Button variant="contained" type="submit">
                                Log In
                            </Button>
                            <MuiLink component={Link} to="../register">
                                Don't have an account?
                            </MuiLink>
                        </Stack>
                    </Box>
                )}
            />
        </StyledPaper>
    );
};
