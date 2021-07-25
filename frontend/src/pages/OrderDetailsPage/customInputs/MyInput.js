import { TextField } from "@material-ui/core";
import { useField } from "formik";
import ErrorMessage from "../ErrorMessage";
import useStyles from "../styles";

const MyTextInput = ({ label, ...props }) => {
  const styles = useStyles();
  const [field, meta] = useField(props);
  const hasError = meta.touched && meta.error;
  return (
    <div className={styles.inputContainer}>
      <TextField
        error={hasError}
        className={styles.input}
        label={label}
        {...field}
        {...props}
      />
      {hasError ? <ErrorMessage>{meta.error}</ErrorMessage> : null}
    </div>
  );
};

export default MyTextInput;
