import { Box, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import React, { useContext } from "react";
import { DataContext } from "../../providers/DataProvider";

interface DrawerProps {
  navItems: Array<string>;
  window?: () => Window;
}

const drawerWidth = 240;

const containerStyle = { textAlign: "center", py: 5, px: 3 };

const listItemStyle = { textAlign: "left" };

const drawerStyle = {
  display: { xs: "block", sm: "none" },
  "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
};

const SideBar = ({ navItems, window }: DrawerProps) => {
  const container = window !== undefined ? () => window().document.body : undefined;

  const { mobileOpen, handleDrawerToggle } = useContext(DataContext);

  const drawer = (
    <Box sx={containerStyle}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={listItemStyle}>
              <ListItemText primary={item} primaryTypographyProps={{ color: "common.white" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box component="nav">
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={drawerStyle}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default SideBar;
