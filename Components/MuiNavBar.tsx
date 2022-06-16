import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { CatchingPokemon, KeyboardArrowDown } from "@mui/icons-material";
import React, { useState } from "react";

function MuiNavBar() {
  const [anchorE1, setAnchorE1] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorE1);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorE1(event.currentTarget);
  };

  const handleClose = () => {
      setAnchorE1(null)
  }
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton size="large" color="inherit" aria-label="logo">
          <CatchingPokemon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          PokeMon
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit">Features</Button>
          <Button color="inherit">Pricing</Button>
          <Button color="inherit">About</Button>
          <Button
            color="inherit"
            id="resources-button"
            onClick={handleClick}
            aria-controls={open ? "resources-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            endIcon = {<KeyboardArrowDown/>}
          >
            Resources
          </Button>
          <Button color="inherit">Login</Button>
        </Stack>
        <Menu
          id="resources-menu"
          anchorEl={anchorE1}
          open={open}
          MenuListProps={{ "aria-labelledby": "resources-button" }}
          onClose = {handleClose}
          anchorOrigin = {{vertical : 'bottom', horizontal : 'right'}}
          transformOrigin = {{vertical : 'top', horizontal : 'right'}}
        >
          <MenuItem onClick={handleClose}>Blog</MenuItem>
          <MenuItem onClick={handleClose}>Podcast</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default MuiNavBar;
