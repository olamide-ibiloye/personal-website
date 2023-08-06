import React from "react";
import type { HeadFC, PageProps } from "gatsby";

const AboutPage: React.FC<PageProps> = () => {
  return <div>about</div>;
};

export default AboutPage;

export const Head: HeadFC = () => {
  return (
    <>
      <title>About Page</title>
    </>
  );
};
