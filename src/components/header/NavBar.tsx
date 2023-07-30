import { AppBar, Toolbar, Box, IconButton, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useContext } from "react";
import { DataContext } from "../../providers/DataProvider";

interface NavBarProps {
  navItems: Array<string>;
}

// Start of styles
const toolBarSpacing = { py: 3 };

const appBarStyle = {
  alignItems: { md: "center" },
  boxShadow: 0,
};

const buttonsContainerStyle = { display: { xs: "none", md: "block" } };

const navButtonsContainer = { borderRadius: 20, backgroundColor: { md: "primary.main" }, p: 1 };

const navButtonsStyle = { color: "#fff", mx: 3, fontSize: 20 };

const iconButtonStyle = { mr: 2, display: { md: "none" }, color: "common.white" };

// End of styles

const NavBar = ({ navItems }: NavBarProps) => {
  const { handleDrawerToggle } = useContext(DataContext);

  return (
    <AppBar color="transparent" component="nav" sx={appBarStyle}>
      <Toolbar sx={toolBarSpacing}>
        <Box sx={navButtonsContainer}>
          <IconButton edge="start" onClick={() => handleDrawerToggle()} sx={iconButtonStyle}>
            <MenuIcon />
          </IconButton>
          <Box sx={buttonsContainerStyle}>
            {navItems.map((item) => (
              <Button key={item} sx={navButtonsStyle}>
                {item}
              </Button>
            ))}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
