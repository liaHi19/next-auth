import React from "react";
import { Paper } from "@mui/material";

import PageHeader from "./PageHeader";
import PageFooter from "./PageFooter";

const Layout = ({ children }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "100vh",
        backgroundColor: "pink",
      }}
    >
      <PageHeader />
      <main className="main">{children}</main>
      <PageFooter />
    </Paper>
  );
};

export default Layout;
