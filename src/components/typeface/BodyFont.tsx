import { Typography } from "@mui/material";
import React from "react";

interface BodyFontProp {
  variant?: string;
  color?: string;
  fontFamily?: string;
  children: string;
  style?: object;
}

const BodyFont = ({
  variant = "body1",
  color = "primary.light",
  fontFamily = "Helvetica",
  children,
  style,
}: BodyFontProp) => {
  return (
    <Typography variant={variant} color={color} fontFamily={fontFamily} sx={{ ...style }}>
      {children}
    </Typography>
  );
};

export default BodyFont;
