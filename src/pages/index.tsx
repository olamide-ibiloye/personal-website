import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Box } from "@mui/material";
import Body from "../components/body/Body";
import BodyFont from "../components/typeface/BodyFont";
import HeaderFont from "../components/typeface/HeaderFont";
import userImage from "../images/olamide.webp";

const containerStyle = {
  textAlign: "center",
  maxHeight: "100vh",
  justifyContent: "center",
  alignItems: "center",
};

const userImageStyle = {
  height: { xs: 300, md: 500 },
  width: { xs: 300, md: 500 },
  borderRadius: 500,
  backgroundColor: "white",
  my: 8,
  mx: "auto",
  backgroundImage: `url(${userImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  border: "5px solid #fff",
};

const textStyle = { my: 4 };

const HomePage: React.FC<PageProps> = () => {
  return (
    <Body paddingTop={20}>
      <Box sx={containerStyle}>
        <HeaderFont>Hi.</HeaderFont>

        <HeaderFont>I'm Olamide.</HeaderFont>

        <BodyFont style={textStyle}>
          I am delighted to extend a warm welcome to you as you step into my digital space. This
          website is a reflection of my journey, passions, and aspirations, and I am thrilled to
          share it with you. My commitment to excellence drives me to continually evolve and grow,
          both personally and professionally.
        </BodyFont>
      </Box>

      <Box sx={userImageStyle} />
    </Body>
  );
};

export default HomePage;

export const Head: HeadFC = () => {
  return (
    <>
      <title>Home Page</title>
    </>
  );
};
