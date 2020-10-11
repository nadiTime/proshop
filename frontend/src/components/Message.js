import React from "react";
import { Alert } from "react-bootstrap";

const Message = ({ variant, children }) => {
  return (
    <Alert variant={variant} style={{ fontWeight: "bold" }}>
      {children}
    </Alert>
  );
};
Message.defaultProps = {
  variant: "info"
};
export default Message;
