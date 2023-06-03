import React from "react";
import { useLoginMutation } from "@/redux/api/authApi";

import { User, LoginResponse, ErrorResponse } from "@/types";
import {
    Button,
    Container,
    Flex,
    PasswordInput,
    Text,
    TextInput,
} from "@mantine/core";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { authActions } from "@/redux/slices/authSlice";
const LoginScreen = () => {
    const [login, { isLoading }] = useLoginMutation();

    const auth = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const result = await login({
            username,
            password,
        });

        console.log("result:", result);
        if ("error" in result) {
            const {
                error: { data },
            } = result as { error: { data: ErrorResponse } };
            console.log("Login failed:", data?.message);
            data?.message
                ? toast.error(data.message)
                : toast.error("Something went wrong");
            return;
        } else {
            const { data } = result as { data: LoginResponse };
            console.log("Login successful:", data);

            const {
                data: { user },
                token,
            } = data;
            dispatch(authActions.setCredentials({ token, user }));
            // Redirect the user to another page or perform any other action
        }
    };
    return (
        <Container size="500px">
            <h1>LoginForm</h1>

            <form
                className="form"
                onSubmit={handleLogin}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "stretch",
                    gap: "1rem",
                }}
            >
                <TextInput
                    placeholder="Your name"
                    label="Full name"
                    withAsterisk
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <PasswordInput
                    placeholder="Password"
                    label="Password"
                    //   description="Password must include at least one letter, number and special character"
                    withAsterisk
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {/* <button
                    disabled={isLoading}
                    type="submit"
                    className="form__button"
                >
                    
                </button> */}

                <Button
                    // leftIcon={<FiLogIn size="1rem" />}
                    type="submit"
                    loading={isLoading}
                    loaderPosition="center"
                    disabled={isLoading}
                    // variant="light"
                    // fullWidth
                >
                    Login
                </Button>
            </form>

            <Flex direction={"column"} align={"center"}>
                <Text>Don't have an account?</Text>
                <Link to="/auth?mode=signup">Signup</Link>
            </Flex>
        </Container>
    );
};

export default LoginScreen;
