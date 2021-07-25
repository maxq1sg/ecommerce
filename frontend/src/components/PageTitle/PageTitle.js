import React from "react";
import useStyles from "./styles";

const PageTitle = ({ value }) => {
  const styles = useStyles();
  return <h1 className={styles.title}>{value}</h1>;
};

export default PageTitle;
