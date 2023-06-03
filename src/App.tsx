import "./App.css";
import { ActionIcon, Header, useMantineColorScheme } from "@mantine/core";
import ChatLayout from "@/components/Chat/ChatLayout";
import { ToastContainer } from "react-toastify";

import { LoginForm, SignupForm } from "@/components/Auth";
function App() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === "dark";
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
            <LoginForm />
            <SignupForm />

            {/* <h1>Hello</h1> */}
            {/* <ChatLayout /> */}
        </>
    );
}

export default App;
