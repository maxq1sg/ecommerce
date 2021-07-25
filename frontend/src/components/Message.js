import React from "react";
import { Alert, AlertTitle } from "@material-ui/lab";
const Message = ({ variant, children }) => {
  return (
    <div>
      <Alert severity={variant}>
        {/* error,warning,success,info */}
        <AlertTitle>{children}</AlertTitle>
      </Alert>
    </div>
  );
};
Message.defaultProps = {
  variant: "info",
};
export default Message;
