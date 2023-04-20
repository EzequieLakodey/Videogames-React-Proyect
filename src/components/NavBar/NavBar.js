// React
import * as React from "react";

// Context
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";

// Components

// Router Dom
import { Link } from "react-router-dom";

// Axios

// Material Ui

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Tooltip,
  MenuItem,
  Badge,
  FormControl,
  Select,
  InputLabel,
} from "@mui/material";

import InsightsIcon from "@mui/icons-material/Insights";

/* Imports */

const settings = ["Profile", "Account", "Help", "Settings"];

function NavBar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const { GetItemsCount } = useContext(CartContext);

  return (
    <AppBar position="relative" color="inherit">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to={"/"}>
            <Typography
              variant="h6"
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
          </Link>

          <MenuItem>
            <IconButton>{GetItemsCount()}</IconButton>
          </MenuItem>

          <FormControl sx={{ width: "0.1" }}>
            <InputLabel>Category</InputLabel>

            <Select label="Category">
              <Link to={"/category/men's clothing"}>
                <MenuItem>Men's Clothing</MenuItem>
              </Link>

              <Link to={"/category/women's clothing"}>
                <MenuItem>Women's Clothing</MenuItem>
              </Link>

              <Link to={"/category/jewelery"}>
                <MenuItem>Jewelery</MenuItem>
              </Link>

              <Link to={"/category/electronics"}>
                <MenuItem>Electronics</MenuItem>
              </Link>
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
