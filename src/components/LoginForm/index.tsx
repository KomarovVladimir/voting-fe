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

export const LoginForm = () => (
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
                <Button variant="contained">Log In</Button>
                <MuiLink component={Link} to="../register">
                    Don't have an account?
                </MuiLink>
            </Stack>
        </Box>
    </Paper>
);
