import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import logo from "../assets/Holguin-equipo.png";
import { Badge, Button, Typography } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import {Link} from "react-router-dom";
import { actionTypes } from '../reducer';
import {useStateValue} from '../StateProvider';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "7rem",
  },
  appBar: {
    backgroundColor: "whitesmoke",
    boxShadow: "none",
  },
  grow: {
    flexGrow: 1,
  },
  button: {
    marginLeft: theme.spacing(2),
  },
  image: {
    marginRight: "10px",
    height: "3rem"
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [{basket}, dispatch] = useStateValue();
  

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Link to="/"> 
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <img src={logo} className={classes.image} alt="logo-title"/>
            </IconButton>
          </Link>
          <div className={classes.grow}/>
          <Typography variant="h6" color="textPrimary" component="p">Hello Gest</Typography>
          
          <div className={classes.button}>
            <Button variant="outlined">
            <strong>Sign In</strong>
            </Button>
            <Link to="checkout-page">
              <IconButton aria-label="show cart items" color="inherit">
                <Badge badgeContent={basket?.length} color="secondary">
                  <ShoppingCart fontSize="large" color="primary"/>
                </Badge>  
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
