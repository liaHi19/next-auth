import React from "react";
import { AppBar, Box, IconButton, List } from "@mui/material";
import AttractionsIcon from "@mui/icons-material/Attractions";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

import { useDialog } from "../../context/DialogContext";

import NavLink from "../ui/NavLink";

const PageHeader = () => {
  const { showLogin } = useDialog();
  const { data: session, status } = useSession();
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
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {session && status !== "loading" && (
            <List sx={{ display: "flex", alignItems: "center" }}>
              <NavLink url="/profile" text="profile" />
            </List>
          )}
          <List>
            {!session && status === "unauthenticated" && (
              <NavLink url="/auth" text="login" onClick={showLogin} />
            )}
            {session && status === "authenticated" && (
              <NavLink
                text="log out"
                logOut={() => {
                  signOut();
                }}
              />
            )}
          </List>
        </Box>
      </Box>
    </AppBar>
  );
};

export default PageHeader;
