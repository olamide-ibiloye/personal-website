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

const BlogPage: React.FC<PageProps> = () => {
  return (
    <Body paddingTop={20}>
      <Box sx={containerStyle}>
        <HeaderFont>Blog</HeaderFont>
      </Box>
    </Body>
  );
};

export default BlogPage;

export const Head: HeadFC = () => {
  return (
    <>
      <title>Blog Page</title>
    </>
  );
};
