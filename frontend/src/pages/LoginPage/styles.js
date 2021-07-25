import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  form: {
    maxwidth: 600,
    borderRadius: 10,
    margin: " 20px auto",
    minHeight: 300,
    width: 400,
    padding: 20,
    boxShadow: "0 0 10px black",
  },
  typography: {
    textAlign: "center",
  },
}));
export default useStyles;
