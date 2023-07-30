import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
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
        {children}
      </DataProvider>
    </>
  );
};

export default Layout;
