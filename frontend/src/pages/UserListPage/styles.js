import { makeStyles } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: theme.palette.info.main,
  },
  title: {
    color: "#fff",
  },
}));
export default useStyles;
