import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { AuthContext } from "../../context/AuthContectProvider";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Menu from "@material-ui/icons/Menu";

const Interviewer = (props:any) => {
    const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }));
  const classes = useStyles();
  return (
    <Box className="main-layout-wrap">
    <AppBar position="static">
      <Toolbar>
      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
       <Menu>
         <MenuItem >Profile</MenuItem>
         <MenuItem >My account</MenuItem>
         <MenuItem >Logout</MenuItem>
       </Menu>
      </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={() => navigate(-1)}>
          Augmento labs RMS
        </Typography>
        <Button color="inherit" onClick={authContext.logout}>
            Log out
          </Button>
      </Toolbar>
    </AppBar>
    <hr />
    <p>
      <h1>Interviewer Page Development in progrss</h1>
      <br />
      <button onClick={() => navigate(-1)}>Home</button>
      </p>
  </Box>
  );
};

export default Interviewer;