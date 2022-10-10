import React from "react";
import Link from "next/link";
import { ListItem, ListItemButton, Button } from "@mui/material";

const NavLink = ({ url, text, onClick, logOut }) => {
  const styles = {
    textTransform: "capitalize",
    color: "white",
    fontSize: "16px",
    fontWeight: "medium",
  };
  return (
    <ListItem>
      {logOut ? (
        <Button variant="text" onClick={logOut} sx={styles}>
          {text}
        </Button>
      ) : (
        <ListItemButton onClick={onClick}>
          <Link href={url}>
            <a style={styles}>{text}</a>
          </Link>
        </ListItemButton>
      )}
    </ListItem>
  );
};

export default NavLink;
