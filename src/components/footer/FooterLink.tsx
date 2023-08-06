import { Box } from "@mui/material";
import React from "react";
import BodyFont from "../typeface/BodyFont";
import { Link } from "gatsby";

interface FooterLinkProp {
  name: string;
  icon: React.ReactNode;
  link: string;
}

const FooterLink = ({ name, icon, link }: FooterLinkProp) => {
  return (
    <Link to={link} style={{ textDecoration: "none" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: { xs: "left", md: "center" },
          alignItems: "center",
        }}
      >
        {icon}
        <BodyFont variant="subtitle1" style={{ ml: 2 }}>
          {name}
        </BodyFont>
      </Box>
    </Link>
  );
};

export default FooterLink;
