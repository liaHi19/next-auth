import React from "react";
import { Typography, Box } from "@mui/material";

const PageFooter = () => {
  const date = new Date().getFullYear();

  return (
    <footer>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px 10px",
          backgroundColor: "purple",
          color: "white",
        }}
      >
        <Typography variant="body1">
          &copy; {date} All rights reserved.
        </Typography>
      </Box>
    </footer>
  );
};

export default PageFooter;
