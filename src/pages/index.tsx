import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Home from "../components/pageComps/Home";

const HomePage: React.FC<PageProps> = () => {
  return (
    <>
      <Home />
    </>
  );
};

export default HomePage;

export const Head: HeadFC = () => {
  return (
    <>
      <title>Home Page</title>
    </>
  );
};
