import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import palette from "./palette";
import typography from "./typography";
import AcornWoff2 from "../fonts/Acorn-Bold.woff2";

let theme = createTheme({
  palette,
  typography: { ...typography, fontFamily: "Acorn, Roboto" },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
        font-family: 'Acorn';
        src: url('Acorn-Bold.eot');
        src: local('Acorn Bold'), local('Acorn-Bold'),
            url('Acorn-Bold.eot?#iefix') format('embedded-opentype'),
            url(${AcornWoff2}) format('woff2'),
            url('Acorn-Bold.woff') format('woff'),
            url('Acorn-Bold.ttf') format('truetype');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
    }`,
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
