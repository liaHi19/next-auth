import React from "react";
import { AppBar, Button, Box, IconButton, List } from "@mui/material";
import AttractionsIcon from "@mui/icons-material/Attractions";
import Link from "next/link";

import NavLink from "../ui/NavLink";

const PageHeader = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "purple" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <IconButton>
          <Link href="/">
            <a>
              <AttractionsIcon sx={{ fontSize: "40px", color: "pink" }} />
            </a>
          </Link>
        </IconButton>

        <List sx={{ display: "flex", alignItems: "center" }}>
          {/* user check */}
          <NavLink url="/profile" link="profile" />
          <NavLink url="/login" link="login" />
          {/* button log out */}
        </List>
      </Box>
    </AppBar>
  );
};

export default PageHeader;
