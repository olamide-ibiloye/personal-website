import { AppBar, Toolbar, Box } from "@mui/material";
import React from "react";

interface NavBarProps {
  navItems: Array<string>;
}

// Start of styles
const toolBarSpacing = { py: 3 };

const appBarStyle = {
  alignItems: { xs: "center" },
  boxShadow: 0,
};

const buttonsContainerStyle = { display: "flex", flexDirection: "row" };

const navButtonsContainer = {
  borderRadius: 20,
  // backgroundColor: "rgba(255, 255, 255, 0.3)",
  backgroundColor: "primary.main",
  py: 2,
  px: 1,
};

const navButtonsStyle = {
  color: "common.white",
  mx: { xs: 2, md: 4 },
  fontSize: { xs: 13, sm: 16, md: 20 },
  fontFamily: "Helvetica",
};
// End of styles

const NavBar = ({ navItems }: NavBarProps) => {
  return (
    <AppBar color="transparent" component="nav" sx={appBarStyle}>
      <Toolbar sx={toolBarSpacing}>
        <Box sx={navButtonsContainer}>
          <Box sx={buttonsContainerStyle}>
            {navItems.map((item) => (
              <Box key={item} sx={navButtonsStyle}>
                {item}
              </Box>
            ))}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
