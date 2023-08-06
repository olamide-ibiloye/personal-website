import React from "react";
import Box from "@mui/material/Box";
import Body from "../body/Body";
import NavBar from "./NavBar";

const navItems = [
  { label: "Home", key: `/` },
  { label: "About", key: `/about/` },
  { label: "Projects", key: `/projects/` },
  { label: "Blog", key: `/blog/` },
  { label: "Contact", key: `/contact/` },
];

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
      </Box>
    </Body>
  );
};

export default Header;
