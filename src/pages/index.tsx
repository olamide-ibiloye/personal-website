import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Box, Typography } from "@mui/material";
import Body from "../components/body/Body";
import userImage from "../images/olamide.webp";

const HomePage: React.FC<PageProps> = () => {
  return (
    <Body paddingY={20}>
      <Box
        sx={{
          textAlign: "center",
          maxHeight: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h1" color="common.white">
          Hi.
        </Typography>
        <Typography variant="h1" color="common.white">
          I'm Olamide.
        </Typography>
        <Typography variant="h5" color="common.white" sx={{ my: 2, fontFamily: "Helvetica" }}>
          Welcome to my website
        </Typography>
      </Box>
      <Box
        sx={{
          height: { xs: 300, md: 500 },
          width: { xs: 300, md: 500 },
          borderRadius: 500,
          backgroundColor: "white",
          margin: "100px auto",
          backgroundImage: `url(${userImage})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          border: "5px solid #fff",
        }}
      />
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
