import { RadioGroup, FormControlLabel, Radio } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import QuestionText from "./QuestionText";
import { useState } from "react";

const RadioComponent = (props: any) => {
  const { question, handleAnswerChange } = props;
  //   console.log("value of props in radio is", props);

  const [value, setValue] = useState({});
  console.log("value of questio is", question);
  return (
    <>
      <Box>
        {/* <QuestionText
          question={question}
          handleAnswerChange={handleAnswerChange}
        /> */}
        {/* {console.log("valueo of question is", question)} */}
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
          {question.questionText.options.map((option: any, index: any) => {
            return (
              <FormControlLabel
                value={option.value}
                control={<Radio />}
                label={option.label}
                key={index}
              />
            );
          })}
        </RadioGroup>
      </Box>
    </>
  );
};

export default RadioComponent;
