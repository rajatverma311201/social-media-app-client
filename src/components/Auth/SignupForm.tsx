import React from "react";
import { useSignupMutation } from "@/redux/api/authApi";

import { User, LoginResponse, ErrorResponse } from "@/types";
import { Button, Container, PasswordInput, TextInput } from "@mantine/core";
import { FiLogIn } from "react-icons/fi";

import { toast } from "react-toastify";

const SignupForm = () => {
    const [signup, { isLoading }] = useSignupMutation();

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [passwordConfirm, setPasswordConfirm] = React.useState("");
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");

    const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (password.length < 8) {
            toast.error("Password must be at least 8 characters long");
            return;
        }
        if (password !== passwordConfirm) {
            toast.error("Passwords do not match");
            return;
        }

        const result = await signup({
            firstName,
            lastName,
            username,
            password,
            passwordConfirm,
        });

        console.log("result:", result);
        if ("error" in result) {
            const {
                error: { data },
            } = result as { error: { data: ErrorResponse } };
            console.log("Signup failed:", data?.message);
            data?.message
                ? toast.error(data.message)
                : toast.error("Something went wrong");
            return;
        } else {
            const { data } = result as { data: LoginResponse };
            console.log("Signup successful:", data);

            const { user } = data.data;

            console.log("user:", user);
            // Redirect the user to another page or perform any other action
        }
    };
    return (
        <Container size="500px">
            <h1>SignupForm</h1>

            <form
                className="form"
                onSubmit={handleSignup}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "stretch",
                    gap: "1rem",
                }}
            >
                <TextInput
                    placeholder="Enter your first name"
                    label="First Name"
                    withAsterisk
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <TextInput
                    placeholder="Enter your last name"
                    label="Last Name"
                    withAsterisk
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <TextInput
                    placeholder="Enter a username"
                    label="Username"
                    withAsterisk
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <PasswordInput
                    placeholder="Enter password"
                    label="Password"
                    withAsterisk
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <PasswordInput
                    placeholder="Enter password again"
                    label="Confirm Password"
                    withAsterisk
                    value={passwordConfirm}
                    // color="red"
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                />

                <Button
                    type="submit"
                    loading={isLoading}
                    loaderPosition="center"
                    disabled={isLoading}
                    // fullWidth={false}
                >
                    Signup
                </Button>
            </form>
        </Container>
    );
};

export default SignupForm;
