import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './src/styles/theme';
import Layout from './src/components/layout/Layout';

export const wrapRootElement = ({ element, props }) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout {...props}>{element}</Layout>
    </ThemeProvider>
  );
};
