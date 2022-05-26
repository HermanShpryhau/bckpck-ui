import { createTheme } from "@mui/material/styles";

const themeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#2b2a2a",
    },
  },
  typography: {
    fontFamily: '"Fira Sans Condensed", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 700,
    },
    body1: {
      fontWeight: 400,
    },
  },
};

export const theme = createTheme(themeOptions);
