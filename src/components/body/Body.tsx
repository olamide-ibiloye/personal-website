import { Box } from "@mui/material";
import React from "react";

interface BodyProps {
  children: React.ReactNode;
  paddingY?: object | number | string;
  paddingX?: object | number | string;
  paddingTop?: object | number | string;
  paddingBottom?: object | number | string;
  paddingLeft?: object | number | string;
  paddingRight?: object | number | string;
  padding?: object | number | string;
}

const Body = ({
  children,
  paddingY,
  paddingX,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
}: BodyProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 1200,
        margin: "auto",
        pt: paddingTop,
        pb: paddingBottom,
        py: paddingY,
        px: paddingX || { xs: 5, lg: 0 },
        pl: paddingLeft,
        pr: paddingRight,
      }}
    >
      {children}
    </Box>
  );
};

export default Body;
