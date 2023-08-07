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

const ContactPage: React.FC<PageProps> = () => {
  return (
    <Body paddingTop={20}>
      <Box sx={containerStyle}>
        <HeaderFont>Contact</HeaderFont>
      </Box>
    </Body>
  );
};

export default ContactPage;

export const Head: HeadFC = () => {
  return (
    <>
      <title>Contact Page</title>
    </>
  );
};
