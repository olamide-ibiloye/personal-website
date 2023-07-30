import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Body from "../body/Body";
import NavBar from "./NavBar";

const navItems = ["Home", "About", "Projects", "Blog", "Contact"];

const headerStyle = {
  display: "flex",
  margin: "auto",
  alignItems: "center",
  justifyContent: "center",
};

const Header = () => {
  return (
    <Body>
      <Box sx={headerStyle}>
        <NavBar navItems={navItems} />

        {/* <Toolbar /> */}
      </Box>
    </Body>
  );
};

export default Header;
