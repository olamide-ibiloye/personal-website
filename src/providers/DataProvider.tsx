import React, { useState, createContext } from "react";

export const DataContext = createContext({
  mobileOpen: false,
  setMobileOpen: () => {},
  handleDrawerToggle: () => {},
});

interface DataProviderProps {
  children: React.ReactNode;
}

const DataProvider = ({ children }: DataProviderProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  let data = {
    mobileOpen,
    setMobileOpen,
    handleDrawerToggle,
  };
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataProvider;
