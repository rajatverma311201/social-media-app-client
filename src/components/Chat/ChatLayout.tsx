import { Box, Container, Flex, Header, Navbar, Text } from "@mantine/core";
// import { ActionIcon, useMantineColorScheme } from "@mantine/core";

// import { Box } from "@mantine/core";
import Sidebar from "./ChatSidebar";
import ChatNavbar from "./ChatNavbar";

const ChatLayout = () => {
    // const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    // const dark = colorScheme === "dark";

    return (
        <>
            <Header height={"2.5rem"}>
                <h2>hello</h2>
            </Header>
            <Flex align="stretch" sx={{ height: "100%" }}>
                <ChatNavbar />
                <Flex
                    direction={"column"}
                    justify={"space-between"}
                    sx={{
                        backgroundColor: "steelblue",
                        // height: "100%",
                        width: "100%",
                    }}
                >
                    <Container
                        fluid
                        sx={{
                            backgroundColor: "slategrey",
                            margin: 0,
                            flex: 1,
                        }}
                    >
                        <Text>Chat</Text>
                    </Container>
                    <Box>
                        <h1>HELLO</h1>
                    </Box>
                </Flex>
            </Flex>
        </>
    );
};

export default ChatLayout;
