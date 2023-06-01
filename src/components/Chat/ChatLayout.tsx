import { Container, Flex } from "@mantine/core";
// import { ActionIcon, useMantineColorScheme } from "@mantine/core";

// import { Box } from "@mantine/core";
import Sidebar from "./ChatSidebar";

const ChatLayout = () => {
    // const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    // const dark = colorScheme === "dark";

    return (
        <Flex>
            <Sidebar />
            <Container sx={{ backgroundColor: "red" }} fluid>
                Default container
            </Container>
        </Flex>
    );
};

export default ChatLayout;
