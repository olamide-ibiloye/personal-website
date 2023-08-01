import { Box } from "@mui/material";
import React from "react";
import BodyFont from "../typeface/BodyFont";

interface FooterLinkProp {
  name: string;
  icon: React.ReactNode;
  link: string;
}

const FooterLink = ({ name, icon, link }: FooterLinkProp) => {
  return (
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
  );
};

export default FooterLink;
