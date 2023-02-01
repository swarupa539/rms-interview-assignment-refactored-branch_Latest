import React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
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
import { textAlign } from "@mui/system";

const RmsHome = (props:any) => {
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={() => navigate(-1)}>
            Augmento labs RMS
          </Typography>
        </Toolbar>
      </AppBar>
      <hr />
      <div>
      <p style={{paddingLeft:'190px'}}>
            <li > <strong >Subject Expert</strong> is any authenticated user(every one) </li>
             <li> <strong>Interviewer</strong> is any authenticated user </li>
            <li> <strong>Candidate</strong> will never be authenticated </li>
      </p>
      <p style={{textAlign:'center'}}>
        <button onClick={() => navigate("/assignments")}>Subject Expert</button> &nbsp;&nbsp;&nbsp;
        <button onClick={() => navigate("/reviewer")}>Interviewer</button>&nbsp;&nbsp;&nbsp;
        <button onClick={() => navigate("/quiz")}>Candidate</button>
      </p>
      </div>     
    </Box>
  );
};
export default RmsHome;
