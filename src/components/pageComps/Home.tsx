import { Box, Typography } from "@mui/material";
import React from "react";
import Body from "../body/Body";
import userImage from "../../images/olamide.webp";

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

const textStyle = { my: 4, fontFamily: "Helvetica" };

const Home = () => {
  return (
    <Body paddingY={20}>
      <Box sx={containerStyle}>
        <Typography variant="h1" color="common.white">
          Hi.
        </Typography>
        <Typography variant="h1" color="common.white">
          I'm Olamide.
        </Typography>
        <Typography variant="body1" color="common.white" sx={textStyle}>
          I am delighted to extend a warm welcome to you as you step into my digital space. This
          website is a reflection of my journey, passions, and aspirations, and I am thrilled to
          share it with you. My commitment to excellence drives me to continually evolve and grow,
          both personally and professionally.
        </Typography>
      </Box>
      <Box sx={userImageStyle} />
    </Body>
  );
};

export default Home;
