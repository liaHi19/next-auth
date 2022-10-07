import React from "react";
import { Button } from "@mui/material";

const MainButton = ({ children, ...rest }) => {
  return (
    <Button variant="outlined" {...rest}>
      {children}
    </Button>
  );
};

export default MainButton;
