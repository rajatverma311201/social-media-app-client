import {
    Avatar,
    Box,
    Divider,
    Flex,
    Navbar,
    ScrollArea,
    Text,
} from "@mantine/core";
import React from "react";
import { FaSearch } from "react-icons/fa";

import { TextInput } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
const ChatNavbar = () => {
    const { isPending, error, data } = useQuery({
        queryKey: ["users"],
        queryFn: () =>
            fetch(`${import.meta.env.VITE_SERVER_URL}/api/v1/users`).then(
                (res) => res.json()
            ),
    });

    if (isPending) return <h1>Loading...</h1>;
    if (error) return <h1>An error has occurred: {error.message}</h1>;
    console.log(data);
    return (
        <Navbar sx={{ maxWidth: "20rem", padding: "0.5rem" }}>
            <Text align="center">Chat</Text>
            <TextInput
                // label="Your email"
                placeholder="Search your conversations"
                icon={<FaSearch size="0.8rem" />}
            />
            <ScrollArea offsetScrollbars sx={{ marginTop: "2rem" }}>
                {/* ... content */}
                <Flex
                    direction={"column"}
                    gap={"xs"}
                    sx={{
                        // marginTop: "2rem",
                        // overflowY: "scroll",
                        paddingRight: "0.25rem",
                    }}
                >
                    {data?.data?.users?.map((user: any) => (
                        <>
                            <Box
                                sx={(theme) => ({
                                    backgroundColor:
                                        theme.colorScheme === "dark"
                                            ? theme.colors.dark[6]
                                            : theme.colors.gray[0],
                                    textAlign: "center",
                                    padding: theme.spacing.xs,
                                    borderRadius: theme.radius.md,
                                    cursor: "pointer",

                                    "&:hover": {
                                        backgroundColor:
                                            theme.colorScheme === "dark"
                                                ? theme.colors.dark[5]
                                                : theme.colors.gray[1],
                                    },
                                })}
                            >
                                <Flex align={"center"} gap={"sm"}>
                                    <Avatar color="cyan" radius="xl">
                                        {user?.firstName
                                            ?.trim()?.[0]
                                            ?.toUpperCase()}
                                    </Avatar>
                                    <Text>{user.firstName.split()}</Text>
                                </Flex>
                            </Box>
                            {/* <Divider /> */}
                        </>
                    ))}
                </Flex>
            </ScrollArea>
        </Navbar>
    );
};

export default ChatNavbar;
