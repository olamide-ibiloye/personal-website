import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "../header/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <CssBaseline />
      <Header />
      {children}
    </>
  );
};

export default Layout;
