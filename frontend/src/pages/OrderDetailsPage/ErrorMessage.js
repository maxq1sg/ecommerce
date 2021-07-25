import React from "react";
import useStyles from "./styles";

const ErrorMessage = ({ children }) => {
  const styles = useStyles();
  return <div className={styles.error}>{children}</div>;
};

export default ErrorMessage;
