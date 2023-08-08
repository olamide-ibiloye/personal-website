import React from "react";
import { Box, CssBaseline } from "@mui/material";
import Header from "../header/Header";
import DataProvider from "../../providers/DataProvider";
import Footer from "../footer/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <CssBaseline />
      <DataProvider>
        <Header />
        <Box
          sx={{
            backgroundImage: "linear-gradient(0deg, #021A56 0%, #0330AA 100%)",
          }}
        >
          {children}
        </Box>
        <Footer />
      </DataProvider>
    </>
  );
};

export default Layout;
