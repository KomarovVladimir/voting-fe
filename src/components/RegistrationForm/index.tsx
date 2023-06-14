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

export const RegistrationForm = () => (
    <Paper>
        <Box component="form">
            <Stack direction="column" spacing={2} padding={3}>
                <FormControl required>
                    <TextField label="Email*" type="email" />
                    <FormHelperText>Email helper</FormHelperText>
                </FormControl>
                <FormControl required>
                    <TextField label="Password*" type="password" />
                    <FormHelperText>Password helper</FormHelperText>
                </FormControl>
                <FormControl required>
                    <TextField label="Confirm password*" type="password" />
                    <FormHelperText>Confirm password helper</FormHelperText>
                </FormControl>
                <FormControl>
                    <TextField label="First name" type="text" />
                    <FormHelperText>First name helper</FormHelperText>
                </FormControl>
                <FormControl>
                    <TextField label="Last name" type="text" />
                    <FormHelperText>Last name helper</FormHelperText>
                </FormControl>
                <Button variant="contained">Register</Button>
                <MuiLink component={Link} to="../login">
                    I already have an account
                </MuiLink>
            </Stack>
        </Box>
    </Paper>
);
