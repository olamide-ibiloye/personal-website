import React from "react";
import { Box, CssBaseline } from "@mui/material";
import Header from "../header/Header";
import DataProvider from "../../providers/DataProvider";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <CssBaseline />
      <DataProvider>
        <Header />
        {/* <Box
        sx={{
          backgroundColor: "#FFDEE9",
          backgroundImage: "linear-gradient(0deg, #FFFFFF 0%, #e0a8dc 100%)",
        }}
      > */}
        {children}
        {/* </Box> */}
      </DataProvider>
    </>
  );
};

export default Layout;
