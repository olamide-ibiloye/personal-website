import React from "react";
import type { HeadFC, PageProps } from "gatsby";

const BlogPage: React.FC<PageProps> = () => {
  return <div>blog</div>;
};

export default BlogPage;

export const Head: HeadFC = () => {
  return (
    <>
      <title>Blog Page</title>
    </>
  );
};
