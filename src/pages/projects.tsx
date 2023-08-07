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

const ProjectsPage: React.FC<PageProps> = () => {
  return (
    <Body paddingTop={20}>
      <Box sx={containerStyle}>
        <HeaderFont>Projects</HeaderFont>
      </Box>
    </Body>
  );
};

export default ProjectsPage;

export const Head: HeadFC = () => {
  return (
    <>
      <title>Projects Page</title>
    </>
  );
};
