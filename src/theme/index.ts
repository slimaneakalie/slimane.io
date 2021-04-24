import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const appTheme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "body > *": {
          maxWidth: 1040,
          "@media (max-width: 1040px)": {
            width: "100%",
          },
        },
        body: {
          display: "flex",
          justifyContent: "center",
          "@media (max-width: 1040px)": {
            display: "block",
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
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
