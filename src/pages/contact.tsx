import React from "react";
import type { HeadFC, PageProps } from "gatsby";

const ContactPage: React.FC<PageProps> = () => {
  return <div>contact</div>;
};

export default ContactPage;

export const Head: HeadFC = () => {
  return (
    <>
      <title>Contact Page</title>
    </>
  );
};
