import React from "react";
import { InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const ShowPassword = ({ password, onClick }) => {
  return (
    <InputAdornment position="end">
      <IconButton onClick={onClick}>
        {password ? <Visibility /> : <VisibilityOff />}
      </IconButton>
    </InputAdornment>
  );
};

export default ShowPassword;
