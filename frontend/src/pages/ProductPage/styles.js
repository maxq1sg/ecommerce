import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  img: {
    display: "block",
    margin: " 0 auto",
  },
  price: {
    padding: "4px",
    borderRadius: "8px",
    color: "#fff",
    display: "inline-block",
    backgroundColor: theme.palette.primary.main,
    marginTop: "10px",
  },
  success: {
    padding: "8px",
    borderRadius: "4px",
    display: "inline-block",
    margin: "10px 0",
    backgroundColor: theme.palette.success.main,
  },
  fail: {
    padding: "8px",
    borderRadius: "4px",
    display: "inline-block",
    margin: "10px 0",
    backgroundColor: theme.palette.error.light,
  },
  title: {
    textAlign: "center",
    backgroundColor: theme.palette.info.main,
    color: "#fff",
  },
  buttonWrapper: {
    textAlign: "center",
    paddingTop: "15px",
  },
  avatar: {
    width: "80px",
    paddingTop: "25px",
    paddingLeft: "30px",
  },
  comment: {
    padding: "15px",
  },
  name: {
    paddingRight: "10px",
  },
  review: {
    margin: "10px",
    maxWidth: "800px",
  },
  text: {
    marginTop: "20px",
    wordBreak: "break-word",
  },
  input: {
    width: "100%",
    background: "white",
  },
  select: {
    minWidth: "120px",
    marginBottom: "20px",
    background: "white",
  },
  submitButton: {
    position: "absolute",
    right: 10,
    bottom: 10,
    [theme.breakpoints.down("500")]:{
      fontSize:"12px",
      padding: 5
    }
  },
}));

export default useStyles;
