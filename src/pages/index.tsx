import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Box, Typography } from "@mui/material";

const HomePage: React.FC<PageProps> = () => {
    return (
        <Box>
            <Typography variant="h1">HomePage with Olamide</Typography>
        </Box>
    );
};

export default HomePage;

export const Head: HeadFC = () => <title>Home Page</title>;
