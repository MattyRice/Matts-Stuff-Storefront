import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
  Icon,
} from "@material-ui/core";
import { ShoppingCartRounded } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/MRlogo.png";

import useStyles from "./styles";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar position="fixed" className={classes.AppBar} color="inherit">
        <Toolbar>
          <Typography component={Link} to="/">
            <img
              src={logo}
              alt="MattsStuff.js"
              height="25px"
              className={classes.image}
            />
            Matt's Stuff
          </Typography>
          <div className={classes.grow} />
          {location.pathname != "/cart" && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cart items"
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCartRounded />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
