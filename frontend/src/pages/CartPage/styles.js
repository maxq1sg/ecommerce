import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    padding: "16px",
    maxWidth: "300px",
    marginTop: "20px",
  },
  button: {
    display: "block",
    margin: "10px auto 0",
  },
  title: {
    textAlign: "center",
  },
}));

export default useStyles;
