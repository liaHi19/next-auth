import React, { forwardRef } from "react";
import { FormControl, FormHelperText, TextField } from "@mui/material";

const Input = forwardRef(
  (
    {
      label,
      type = "text",
      errorText,
      showPassword,
      handleShowPassword,
      ...rest
    },
    ref
  ) => {
    return (
      <FormControl
        error
        sx={{ height: "76px", marginBottom: "4px", width: "100%" }}
      >
        <TextField
          color="secondary"
          variant="filled"
          label={label}
          type={type}
          ref={ref}
          {...rest}
        />
        {errorText && <FormHelperText>{errorText}</FormHelperText>}
      </FormControl>
    );
  }
);

Input.displayName = "Input";

export default Input;
