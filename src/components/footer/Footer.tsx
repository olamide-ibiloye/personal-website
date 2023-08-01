import React from "react";
import Body from "../body/Body";
import { Box } from "@mui/material";
import BodyFont from "../typeface/BodyFont";
import { LinkedIn, GitHub, Email, Article } from "@mui/icons-material";
import FooterLink from "./FooterLink";

const Footer = () => {
  return (
    <Body paddingY={5}>
      <Box bottom={0}>
        {/* TODO: Contact Form */}

        <Box
          sx={{
            display: { xs: "grid" },
            gridTemplateColumns: { xs: "2fr 2fr", md: "2fr 2fr 2fr 2fr" },
            gap: 2,
          }}
        >
          <FooterLink name="LinkedIn" icon={<LinkedIn sx={{ color: "lightGrey" }} />} link="" />
          <FooterLink name="GitHub" icon={<GitHub sx={{ color: "lightGrey" }} />} link="" />
          <FooterLink name="Email" icon={<Email sx={{ color: "lightGrey" }} />} link="" />
          <FooterLink name="CV" icon={<Article sx={{ color: "lightGrey" }} />} link="" />
        </Box>

        <BodyFont variant="subtitle2" style={{ mt: 5, textAlign: "center" }}>
          © 2023 Olamide Ibiloye
        </BodyFont>
      </Box>
    </Body>
  );
};

export default Footer;
