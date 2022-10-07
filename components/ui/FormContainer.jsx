import { Paper } from "@mui/material";
import React from "react";

const FormContainer = ({ children }) => {
  return (
    <Paper
      elevation={4}
      sx={{
        margin: "50px auto",
        padding: "15px",
        borderRadius: "5px",
        maxWidth: "640px",
      }}
    >
      {children}
    </Paper>
  );
};

export default FormContainer;
