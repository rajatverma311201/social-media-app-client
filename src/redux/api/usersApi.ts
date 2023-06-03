import { createApi } from "@reduxjs/toolkit/query/react";

const baseUrl = import.meta.env.VITE_SERVER_URL as string;

// export const usersApi = createApi({
//     reducerPath: "usersApi",
//     baseQuery: {
//         baseUrl,
