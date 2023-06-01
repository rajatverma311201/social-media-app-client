import React from "react";
import { Paper, Text } from "@mantine/core";

function Sidebar() {
    return (
        <Paper shadow="xs">
            <Text size="lg" weight={700}>
                Conversations
            </Text>
            {/* Render the list of conversations here */}
        </Paper>
    );
}

export default Sidebar;
