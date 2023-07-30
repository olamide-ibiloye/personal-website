import React, { createContext } from "react";

export const DataContext = createContext({});

interface DataProviderProps {
  children: React.ReactNode;
}

const DataProvider = ({ children }: DataProviderProps) => {
  let data = {};
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataProvider;
