import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';

const Layout = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Box >
        {children}
      </Box>
    </>
  );
};

export default Layout;
