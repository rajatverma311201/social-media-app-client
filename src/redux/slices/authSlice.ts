import { User } from "@/types";

interface AuthState {
    token: string | null;
    isAuthenticated: boolean;
    // isLoading: boolean;
    user: User | null;
    // error: string | null;
}

const initialState: AuthState = {
    token: localStorage.getItem("token"),
    isAuthenticated: false,
    // isLoading: false,
    user: null,
    // error: null,
};
