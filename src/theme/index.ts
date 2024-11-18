import { createTheme, red } from "../components/mui";

// Create a theme instance.
const appTheme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#F8FAFC",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
});

export default appTheme;
