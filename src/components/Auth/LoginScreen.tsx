import React from "react";
import { useLoginMutation } from "@/redux/api/authApi";

import { User, LoginResponse, ErrorResponse } from "@/types";

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
            console.log("Login failed:", data.message);
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
        <div>
            <h1>LoginScreen</h1>

            <form className="form" onSubmit={handleLogin}>
                <div className="form__group">
                    <label htmlFor="username" className="form__label">
                        Username
                    </label>
                    <input
                        type="text"
                        className="form__input"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form__group">
                    <label htmlFor="password" className="form__label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form__input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    disabled={isLoading}
                    type="submit"
                    className="form__button"
                >
                    {isLoading ? "Please wait" : "Login"}
                </button>
            </form>
        </div>
    );
};

export default LoginScreen;
