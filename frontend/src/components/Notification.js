import React from "react";
import { useSelector } from "react-redux";
import Alert from "@mui/material/Alert";

const Notification = () => {
  const notification = useSelector((state) => state.notification);

  if (!notification) {
    return null;
  }

  return (
    <Alert
      id="notification"
      severity={notification.error ? "error" : "success"}
      sx={{ marginBottom: 2, fontSize: 16 }}
    >
      {notification.msg}
    </Alert>
  );
};

export default Notification;
