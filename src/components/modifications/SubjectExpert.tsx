import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { makeStyles } from '@material-ui/core/styles';
import { AuthContext } from "../../context/AuthContectProvider";
import FileUploadSingle from "./FileUploadSingle";
import CloseIcon from "@mui/icons-material/Close";
import { EXCEL_FILE_BASE64 } from "../../data/constant";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Dialog,
  DialogContent,
  Grid,
  Typography,
} from "@mui/material";
// import "./screens/quiz/common.css";

const SubjectExpert = (props:any) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleDownload = () => {
    alert("downloading starts");
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const authContext = useContext(AuthContext);
  const useStyles = makeStyles((theme: any) => ({
    root: {
      flexGrow: 10,
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
    <Box sx={{ '& button': { m: 2 } }}>
            <div>
            <Button variant="contained" onClick={handleOpen} className={"manage-buttons"}>  
              File Upload
            </Button>
            </div>
            <Dialog fullWidth maxWidth="md" open={open}>
              <DialogContent>
                <AppBar className="add-appbar">
                  <Toolbar>                
                    <IconButton color="inherit" onClick={handleClose} aria-label="close"
                      className="add-close-dialog">
                      <CloseIcon />
                    </IconButton>
                  </Toolbar>
                </AppBar>
                <FileUploadSingle/>
              </DialogContent>
            </Dialog>
            <div>
            <Button variant="contained" onClick={handleDownload} className={"manage-buttons"}>
              File Download
            </Button>
            </div>
    </Box>
    {/* <p>
    Subject Expert Page Development in progrss
      <br />
      <button onClick={() => navigate(-1)}>Home</button>
    </p> */}
  </Box> 
      
  );
};

export default SubjectExpert;