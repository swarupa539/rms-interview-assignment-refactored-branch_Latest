import { jsQuestions } from "../../questions/questions";
import CheckboxComponent from "./CheckboxComponent";
import RadioComponent from "./RadioComponent";
import CodingComponent from "./CodingComponent";
import { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import EndTestDialog from "./EndTestDialog";
import { LinearProgress } from "@mui/material";
const TotalNumberOfQuestion = 5;

const AllQuestions = (props: any) => {
  const { openDialog, handleClose, setOpenDialog } = props;
  const [answers, setAnswers] = useState<any>([]);
  const [progressStatus, setProgressStatus] = useState<number>(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<number>(0);
  // const [openDialog, setOpenDialog] = useState<boolean>(false);

  const handleProgressStatus = () => {
    console.log("handePrgressstatus called");
    const statusPercentage =
      ((answeredQuestions + 1) * 100) / TotalNumberOfQuestion;
    setAnsweredQuestions((prev) => prev + 1);
    console.log("value of st is", statusPercentage);
    setProgressStatus(statusPercentage);
  };

  const handleRadioAnswerChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: any
  ) => {
    const selectedOption = (event.target as HTMLInputElement).value;
    const existingId = answers.find((e: any) => e.id === id);
    if (existingId) {
      existingId.choosenAnswer = selectedOption;
    } else {
      setAnswers((prev: any) => [
        ...prev,
        { id: id, choosenAnswer: selectedOption },
      ]);
      handleProgressStatus();
    }
  };

  const handleCheckboxAnswerChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: any
  ) => {
    const existingId = answers.find((e: any) => e.id === id);
    if (existingId) {
      const valExist = existingId.choosenAnswer.find(
        (e: any) => e === event.target.name
      );

      if (valExist && !event.target.checked) {
        var index = existingId.choosenAnswer.indexOf(event.target.name);
        if (index !== -1) {
          existingId.choosenAnswer.splice(index, 1);
        }
      } else {
        existingId.choosenAnswer.push(event.target.name);
      }
    } else {
      setAnswers((prev: any) => [
        ...prev,
        { id: id, choosenAnswer: [event.target.name] },
      ]);
      handleProgressStatus();
    }
  };

  const handleTestSubmit = () => {
    setOpenDialog(true);
    console.log("The submited answer set is", answers);
    //setConfirmSubmit(true);
  };

  console.log("value of answers is", answers);

  return (
    <>
      <Typography>{`Answered ${answeredQuestions} out of ${TotalNumberOfQuestion}`}</Typography>
      <LinearProgress
        value={progressStatus}
        variant={"determinate"}
        color={"primary"}
      />
      {jsQuestions.map((question, index) => {
        switch (question.selectionType) {
          case "radio":
            return (
              <RadioComponent
                key={index}
                question={{ questionNumber: index + 1, questionText: question }}
                handleAnswerChange={handleRadioAnswerChange}
              />
            );
          case "checkbox":
            return (
              <CheckboxComponent
                key={index}
                question={{ questionNumber: index + 1, questionText: question }}
                handleCheckboxAnswerChange={handleCheckboxAnswerChange}
              />
            );
          case "coding":
            return <CodingComponent key={index} question={question} />;
          default:
            return null;
        }
      })}

      <Box>
        <Typography>{`Answered ${answeredQuestions} out of ${TotalNumberOfQuestion}`}</Typography>
        <LinearProgress
          value={progressStatus}
          variant={"determinate"}
          color={"primary"}
        />
      </Box>
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          color="error"
          onClick={() => setOpenDialog(true)}
        >
          Submit Test
        </Button>
      </Box>
      <EndTestDialog
        openDialog={openDialog}
        handleClose={handleClose}
        setOpenDialog={setOpenDialog}
      />

      {/* <Box>
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
      </Box> */}
    </>
  );
};

export default AllQuestions;
