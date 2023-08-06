import React from "react";
import type { HeadFC, PageProps } from "gatsby";

const ProjectsPage: React.FC<PageProps> = () => {
  return <div>projects</div>;
};

export default ProjectsPage;

export const Head: HeadFC = () => {
  return (
    <>
      <title>Projects Page</title>
    </>
  );
};
