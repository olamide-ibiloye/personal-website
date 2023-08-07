import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Box } from "@mui/material";
import Body from "../components/body/Body";
import HeaderFont from "../components/typeface/HeaderFont";

const containerStyle = {
  textAlign: "center",
  maxHeight: "100vh",
  justifyContent: "center",
  alignItems: "center",
};

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Body paddingTop={20}>
      <Box sx={containerStyle}>
        <HeaderFont>About Me</HeaderFont>

        <HeaderFont variant="h4" style={{ my: 5 }}>
          I'm a Software Engineer working remotely from Manchester, England.
        </HeaderFont>
      </Box>
    </Body>
  );
};

export default AboutPage;

export const Head: HeadFC = () => {
  return (
    <>
      <title>About Page</title>
    </>
  );
};
