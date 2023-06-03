import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = import.meta.env.VITE_SERVER_URL as string;

const authApi = createApi({
    reducerPath: "auth",

    baseQuery: fetchBaseQuery({ baseUrl }),

    endpoints: (builder) => ({
        login: builder.mutation({
            query: ({ username, password }) => ({
                url: "/api/v1/auth/login",
                method: "POST",
                body: { username, password },
            }),
        }),
        signup: builder.mutation({
            query: ({
                firstName,
                lastName,
                username,
                password,
                passwordConfirm,
            }) => ({
                url: "/api/v1/auth/signup",
                method: "POST",
                body: {
                    firstName,
                    lastName,
                    username,
                    password,
                    passwordConfirm,
                },
            }),
        }),
    }),
});

export default authApi;

export const { useLoginMutation, useSignupMutation } = authApi;
