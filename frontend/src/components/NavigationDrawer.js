import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"; // Correct import

const NavigationDrawer = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <List>
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Favorites" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Add Recipe" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default NavigationDrawer;
