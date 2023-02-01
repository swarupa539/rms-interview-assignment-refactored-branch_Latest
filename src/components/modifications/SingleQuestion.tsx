import { Box, Button, LinearProgress, Typography } from "@mui/material";
import { useState } from "react";
import EndTestDialog from "./EndTestDialog";
import CheckboxComponent from "./CheckboxComponent";
import CodingComponent from "./CodingComponent";
import RadioComponent from "./RadioComponent";
import { jsQuestions } from "../../questions/questions";

const TotalNumberOfQuestion = 5;

const SingleQuestion = (props: any) => {
  const { openDialog, handleClose, setOpenDialog } = props;
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const [answers, setAnswers] = useState<any>([]);
  const [progressStatus, setProgressStatus] = useState<number>(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<number>(0);

  const moveToNextQuestion = () => {
    console.log("next question");
    setCurrentQuestion((prev) => prev + 1);
  };
  const moveToPreviousQuestion = () => {
    console.log("previous question");
    setCurrentQuestion((prev) => prev - 1);
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

  const handleProgressStatus = () => {
    console.log("handePrgressstatus called");
    const statusPercentage =
      ((answeredQuestions + 1) * 100) / TotalNumberOfQuestion;
    setAnsweredQuestions((prev) => prev + 1);
    console.log("value of st is", statusPercentage);
    setProgressStatus(statusPercentage);
  };

  const handleCheckboxAnswerChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: any
  ) => {
    console.log(event.target.name, event.target.checked, id);
    const existingId = answers.find((e: any) => e.id === id);
    console.log("exisidis", existingId);
    if (existingId) {
      console.log("inded if existingID");
      const valExist = existingId.choosenAnswer.find(
        (e: any) => e === event.target.name
      );
      console.log("value of valExist is", valExist);

      if (valExist && !event.target.checked) {
        console.log("inded valExist and !event.target.checked");
        var index = existingId.choosenAnswer.indexOf(event.target.name);
        if (index !== -1) {
          existingId.choosenAnswer.splice(index, 1);
        }
      } else {
        console.log("in else part of valexist false");
        existingId.choosenAnswer.push(event.target.name);
      }
    } else {
      console.log("inside main else part");
      setAnswers((prev: any) => [
        ...prev,
        { id: id, choosenAnswer: [event.target.name] },
      ]);
      handleProgressStatus();
    }
  };
  console.log("answer is", answers);
  return (
    <>
      <h1>single question</h1>
      <Box>
        <Typography>{`Answered ${answeredQuestions} out of ${TotalNumberOfQuestion}`}</Typography>
        <LinearProgress
          value={progressStatus}
          variant={"determinate"}
          color={"primary"}
        />
      </Box>
      <Box>
        {jsQuestions.map((question: any, index: any) => {
          if (index + 1 === currentQuestion) {
            switch (question.selectionType) {
              case "radio":
                return (
                  <RadioComponent
                    key={index}
                    question={{
                      questionNumber: index + 1,
                      questionText: question,
                    }}
                    handleAnswerChange={handleRadioAnswerChange}
                  />
                );
              case "checkbox":
                return (
                  <CheckboxComponent
                    key={index}
                    question={{
                      questionNumber: index + 1,
                      questionText: question,
                    }}
                    handleCheckboxAnswerChange={handleCheckboxAnswerChange}
                  />
                );
              case "coding":
                return <CodingComponent key={index} question={question} />;
              default:
                return null;
            }
          }
        })}
      </Box>
      <Box>
        {currentQuestion <= TotalNumberOfQuestion && currentQuestion > 1 && (
          <Button variant="outlined" onClick={moveToPreviousQuestion}>
            Previous
          </Button>
        )}
        {currentQuestion < TotalNumberOfQuestion && (
          <Button variant="contained" onClick={moveToNextQuestion}>
            Next
          </Button>
        )}
      </Box>
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <Button
          color="error"
          variant="contained"
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
    </>
  );
};
export default SingleQuestion;
