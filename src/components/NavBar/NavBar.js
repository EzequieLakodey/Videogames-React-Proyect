//  IMPORTS

import * as React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// MATERIAL UI

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InsightsIcon from "@mui/icons-material/Insights";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

//  IMPORTS

const settings = ["Profile", "Account", "Help", "Settings"];

function NavBar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="relative" color="inherit">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 400,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}>
            BoombleGoom
          </Typography>

          <MenuItem>
            <IconButton>
              <Badge badgeContent={0} color="error">
                <ShoppingCartIcon fontSize="large" />
              </Badge>
            </IconButton>
          </MenuItem>

          <MenuItem>
            <IconButton>
              <Badge badgeContent={0} color="error">
                <InsightsIcon fontSize="large" />
              </Badge>
            </IconButton>
          </MenuItem>

          <FormControl sx={{ width: "0.1" }}>
            <InputLabel>Category</InputLabel>
            <Select label="Category">
              <MenuItem>
                <Link to={"/category/mensclothing"}>Men's Clothing</Link>
              </MenuItem>
              <MenuItem>
                <Link to={"/category/womenclothing"}>Women's Clothing</Link>
              </MenuItem>
              <MenuItem>
                <Link to={"/category/jewelery"}>Jewelery</Link>
              </MenuItem>
              <MenuItem>
                <Link to={"/category/electronic"}>Electronics</Link>
              </MenuItem>
            </Select>
          </FormControl>

          <Box sx={{ flexGrow: 1 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 1 }}>
                <Avatar alt="User profile image" />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: "50px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}>
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
