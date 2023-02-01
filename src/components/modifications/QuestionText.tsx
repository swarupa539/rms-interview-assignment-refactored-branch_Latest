import { FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { useState } from "react";

const QuestionText = (props: any) => {
  const { question, handleAnswerChange } = props;
  // console.log("value of quetion in text is", question);

  //const [answers, setAnswers] = useState<any>([]);

  const [value, setValue] = useState({});

  //   const handleChange = (
  //     event: React.ChangeEvent<HTMLInputElement>,
  //     id: any
  //   ) => {
  //     console.log(event);
  //     console.log(id);
  //     const selectedOption = (event.target as HTMLInputElement).value;
  //     setValue((event.target as HTMLInputElement).value);
  //     setAnswers((prev: any) => [
  //       ...prev,
  //       { id: id, choosenAnswer: selectedOption },
  //     ]);
  //   };
  //   console.log("value of answers is", answers);

  return (
    <>
      <Typography>{`${question.questionNumber}. ${question.questionText.question}`}</Typography>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        value={value}
        onChange={(event) => {
          setValue((event.target as HTMLInputElement).value);
          handleAnswerChange(event, question.questionText.id);
        }}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </>
  );
};
export default QuestionText;
