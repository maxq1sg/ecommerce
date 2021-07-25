import { createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2F4F4F",
    },
    secondary: {
      main: "#846fe3",
    },
    info: {
      main: "#437575",
    },
  },

  overrides: {
    MuiCard: {
      root: {
        boxShadow: "0 0  4px 0 #000",
      },
    },
    MuiTextField: {
      root: {
        margin: "10px 0",
      },
    },
    MuiFormControl: {
      root: {
        margin: "10px 0",
      },
    },
    MuiTypography: {
      h6: {
        fontWeight: "bold",
        fontSize: "2em",
      },
      gutterBottom: {
        marginBottom: 0, // 16px
      },
    },
  },
});
export default theme;
