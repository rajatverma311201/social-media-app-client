import React from "react";
import { useLoginMutation } from "@/redux/api/authApi";

import { User, LoginResponse, ErrorResponse } from "@/types";
import { Button, Container, PasswordInput, TextInput } from "@mantine/core";
import { FiLogIn } from "react-icons/fi";
import { toast } from "react-toastify";
const LoginScreen = () => {
    const [login, { isLoading }] = useLoginMutation();

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

            const { user } = data.data;

            console.log("user:", user);
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
        </Container>
    );
};

export default LoginScreen;
