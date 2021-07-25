import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  form: {
    margin: "0 auto",
    maxWidth: "600px",
    borderRadius: "20px",
    padding: "20px",
    boxShadow:"0 0 10px black"
  },
  input: {
    width: "100%",
  },
  inputContainer: {
    width: "100%",
  },
  error: {
    color: "red",
  },
  card: {
    marginTop: "30px",
  },
  buttonContainer: {
    marginTop: "20px",
    textAlign: "center",
  },
  button: {
    "&:first-child": {
      marginRight:"10px"
    },
  },
}));

export default useStyles;
