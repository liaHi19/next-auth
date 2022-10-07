import React from "react";
import { AppBar, Box, IconButton, List } from "@mui/material";
import AttractionsIcon from "@mui/icons-material/Attractions";
import Link from "next/link";

import { useDialog } from "../../context/DialogContext";

import NavLink from "../ui/NavLink";

const PageHeader = () => {
  const { showLogin } = useDialog();
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
          <NavLink url="/auth" link="login" onClick={showLogin} />
          {/* button log out */}
        </List>
      </Box>
    </AppBar>
  );
};

export default PageHeader;
