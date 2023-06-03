import { LoginForm, SignupForm } from "@/components/Auth";
import { useSearchParams } from "react-router-dom";

const AuthPage = () => {
    const [searchParams] = useSearchParams();

    return (
        <div>
            <h1>Auth</h1>
            {searchParams.get("mode")?.toLowerCase() === "signup" ? (
                <SignupForm />
            ) : (
                <LoginForm />
            )}
        </div>
    );
};

export default AuthPage;
