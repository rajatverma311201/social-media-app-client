import "./App.css";
import { ActionIcon, Header, useMantineColorScheme } from "@mantine/core";
import ChatLayout from "@/components/Chat/ChatLayout";
import { ToastContainer } from "react-toastify";

import { AuthPage } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === "dark";

    const router = createBrowserRouter([
        {
            path: "/",
            element: <h1>Hello world!</h1>,
        },
        {
            path: "/auth",
            element: <AuthPage />,
        },
    ]);
    return (
        <>
            <ToastContainer theme={colorScheme} autoClose={1500} />
            <Header height="50px">
                <ActionIcon
                    variant="outline"
                    color={dark ? "yellow" : "blue"}
                    onClick={() => toggleColorScheme()}
                >
                    {dark ? "🌞" : "🌚"}
                </ActionIcon>
            </Header>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
// {/* <LoginForm /> */}
// {/* <SignupForm /> */}

// <AuthPage />

// {/* <h1>Hello</h1> */}
// {/* <ChatLayout /> */}
