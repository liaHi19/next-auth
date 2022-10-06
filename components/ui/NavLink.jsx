import React from "react";
import Link from "next/link";
import {
  IconButton,
  Typography,
  ListItem,
  ListItemButton,
} from "@mui/material";

const NavLink = ({ url, link }) => {
  return (
    <ListItem>
      <ListItemButton>
        <Link href={url}>
          <a>
            <Typography variant="h6" sx={{ textTransform: "capitalize" }}>
              {link}
            </Typography>
          </a>
        </Link>
      </ListItemButton>
    </ListItem>
  );
};

export default NavLink;
