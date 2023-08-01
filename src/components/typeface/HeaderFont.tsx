import { Typography } from "@mui/material";
import React from "react";

interface HeaderFontProp {
  variant?: string;
  color?: string;
  fontFamily?: string;
  children: string;
  style?: object;
}

const HeaderFont = ({
  variant = "h1",
  color = "primary.main",
  fontFamily = "Acorn",
  children,
  style,
}: HeaderFontProp) => {
  return (
    <Typography variant={variant} color={color} fontFamily={fontFamily} sx={{ ...style }}>
      {children}
    </Typography>
  );
};

export default HeaderFont;
