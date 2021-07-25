import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    boxSizing: "content-box",
    padding: 20,
    flex: "1 0 250px",
    margin: "15px",
  },
  table: {
    width: "100%",
  },
  title: {
    fontSize: "21px",
    fontWeight: "bold",
    [theme.breakpoints.down("700")]: {
      fontSize: "15px",
      fontWeight: 0,

    },
  },
  tr: {
    borderBottom: "1px solid grey",
    "&:last-child": {
      borderBottom: "none",
    },
  },
  flex: {
    display: "flex",
    flexWrap: "wrap ",
  },
}));

export default useStyles;
