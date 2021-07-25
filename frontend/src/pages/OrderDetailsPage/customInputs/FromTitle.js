import { Typography } from "@material-ui/core";
import React from "react";

const FromTitle = ({ children }) => {
  return (
    <div>
      <Typography variant="h4">{children}</Typography>
    </div>
  );
};

export default FromTitle;
