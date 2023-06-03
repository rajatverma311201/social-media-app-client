import { User } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

let token: string | null = localStorage.getItem("JWT_TOKEN");
let jwtTokenExpiry: string | null = localStorage.getItem("JWT_TOKEN_EXPIRY");
const userString: string | null = localStorage.getItem("USER");
let user: User | null = userString ? JSON.parse(userString) : null;

const removeAuthDetails = () => {
    token = null;
    user = null;
    jwtTokenExpiry = null;
    localStorage.removeItem("JWT_TOKEN");
    localStorage.removeItem("JWT_TOKEN_EXPIRY");
    localStorage.removeItem("USER");
};

if (jwtTokenExpiry) {
    if (new Date(jwtTokenExpiry) < new Date()) {
        removeAuthDetails();
    }
} else {
    removeAuthDetails();
}

interface AuthState {
    token: string | null;
    isAuthenticated: boolean;
    user: User | null;
}

const initialState: AuthState = {
    token: token,
    isAuthenticated: false,
    user: user,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.token = action.payload.token;
            state.isAuthenticated = true;
            state.user = action.payload.user;

            localStorage.setItem("JWT_TOKEN", action.payload.token);
            localStorage.setItem("USER", JSON.stringify(action.payload.user));

            const currentDate = new Date();
            currentDate.setDate(currentDate.getDate() + 60);
            // console.log(currentDate);

            localStorage.setItem("JWT_TOKEN_EXPIRY", currentDate.toString());
        },
        logout: (state) => {
            state.token = null;
            state.isAuthenticated = false;
            state.user = null;

            removeAuthDetails();
        },
        updateUser: (state, action) => {
            state.user = action.payload;
        },
        updateToken: (state, action) => {
            state.token = action.payload;
        },
    },
});

export const authActions = authSlice.actions;
const authReducer = authSlice.reducer;

export default authReducer;
