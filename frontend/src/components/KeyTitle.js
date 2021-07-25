import { Typography } from "@material-ui/core";
import React from "react";

const KeyTitle = ({ children, size }) => {
  return (
    <Typography
      component="span"
      variant="overline"
      style={{ fontSize: size }}
      // className={classes.inline}
      color="textPrimary"
      paragraph
    >
      {children}
    </Typography>
  );
};

export default KeyTitle;
