import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { deepPurple, amber } from "@mui/material/colors";

// Create a theme instance.
const theme1 = createTheme({
  palette: {
    // primary: deepPurple,
    // secondary: amber,
    mode: 'dark',
    // mode: 'light',
  },
  typography: {
    // Tell MUI what's the font-size on the html element is.
    htmlFontSize: 21,
  },
  shape: {
    // borderRadius: '4%'
  }
});

const theme = responsiveFontSizes(theme1);

export default theme;
