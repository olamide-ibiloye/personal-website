import { AppBar, Toolbar, Box } from "@mui/material";
import { Link } from "gatsby";
import React from "react";

interface NavItem {
  label: string;
  key: string;
}

interface NavBarProps {
  navItems: Array<NavItem>;
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
  backgroundColor: "rgba(3, 35, 122, 0.5)",
  py: 2,
  px: 1,
};

const navButtonsStyle = {
  color: "primary.main",
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
              <Link key={item.key} to={item.key} style={{ textDecoration: "none" }}>
                <Box sx={navButtonsStyle}>{item.label}</Box>
              </Link>
            ))}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
