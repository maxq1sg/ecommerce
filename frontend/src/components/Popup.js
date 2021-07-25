import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React from "react";

const Popup = ({ open, handleClose, children }) => {
  // console.log(open, handleClose);
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={10000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          {children}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Popup;
