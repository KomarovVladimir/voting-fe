import {
    Box,
    Button,
    FormControl,
    Stack,
    TextField,
    Link as MuiLink,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Form, Field } from "react-final-form";

import { Paper } from "components";

import { validate } from "./utils";

import { useAuth } from "../../hooks/useAuth";
import { IAuthData } from "../../api/authApi";

//TODO: Move the types
export interface ILoginForm {
    email: string;
    password: string;
}

export const LoginForm = () => {
    const { handleLogin } = useAuth();

    const onSubmit = (values: IAuthData) => {
        handleLogin(values);
    };

    return (
        <Paper sx={{ width: "100%" }}>
            <Form
                onSubmit={onSubmit}
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
                            <FormControl>
                                <Field
                                    name="password"
                                    render={({
                                        input: { value, onChange },
                                        meta: { touched, error },
                                    }) => (
                                        <TextField
                                            label="Password"
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
                            <Button variant="contained" type="submit">
                                Log In
                            </Button>
                            <MuiLink component={Link} to="../register">
                                Don't have an account?
                            </MuiLink>
                        </Stack>
                    </Box>
                )}
                {...{ validate }}
            />
        </Paper>
    );
};
