import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    Paper,
    Stack,
    TextField,
    Link as MuiLink,
} from "@mui/material";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";

const testAuthData = { email: "admin@email.com", password: "admin" };

export const LoginForm = () => {
    const { handleLogin } = useAuth();

    return (
        <Paper>
            <Box component="form">
                <Stack direction="column" spacing={2} padding={3}>
                    <FormControl>
                        <TextField label="Email" type="email" />
                        <FormHelperText>Email helper</FormHelperText>
                    </FormControl>
                    <FormControl>
                        <TextField label="Password" type="password" />
                        <FormHelperText>Password helper</FormHelperText>
                    </FormControl>
                    <Button
                        variant="contained"
                        onClick={handleLogin(testAuthData)}
                    >
                        Log In
                    </Button>
                    <MuiLink component={Link} to="../register">
                        Don't have an account?
                    </MuiLink>
                </Stack>
            </Box>
        </Paper>
    );
};