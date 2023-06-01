import { ReactNode, useState } from "react";

import {
    ColorScheme,
    ColorSchemeProvider,
    MantineProvider,
} from "@mantine/core";

const AppWrapper = ({ children }: { children: ReactNode }) => {
    const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

    return (
        <ColorSchemeProvider
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
        >
            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{ colorScheme }}
            >
                {children}
            </MantineProvider>
        </ColorSchemeProvider>
    );
};

export default AppWrapper;
