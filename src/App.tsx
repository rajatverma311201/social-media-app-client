import "./App.css";
import { ActionIcon, useMantineColorScheme } from "@mantine/core";

import ChatLayout from "@/components/Chat/ChatLayout";
function App() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === "dark";
    return (
        <>
            {/* <h1>Hello</h1> */}
            <ChatLayout />
        </>
    );
}

export default App;
