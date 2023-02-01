import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const EndTestDialog = (props: any) => {
  const { openDialog, handleClose, setOpenDialog } = props;

  const navigate = useNavigate();

  const endTest = () => {
    setOpenDialog(false);
    console.log("test ended");
    navigate("/test_submitted");
    // console.log("the final answer set is", answers);
  };

  return (
    <>
      <Box>
        <Dialog
          open={openDialog}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Do want to End the Test? "}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Your latest answers will be submitted if you end the test. Once
              you submit your test will be completed.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary" variant="contained">
              Cancel
            </Button>
            <Button
              onClick={endTest}
              autoFocus
              variant="contained"
              color="error"
            >
              submit and End Test
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </>
  );
};
export default EndTestDialog;
