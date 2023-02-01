import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";

const CheckboxComponent = (props: any) => {
  const { question, handleCheckboxAnswerChange } = props;
  // const [state, setState] = useState<any>([]);

  // const handleChange = (
  //   event: React.ChangeEvent<HTMLInputElement>,
  //   id: any
  // ) => {
  //   console.log(event.target.name, event.target.checked, id);
  //   // setState((prev:any)=>{
  //   //     [...prev, {a:"keek"}]
  //   // })

  //   const existingId = state.find((e: any) => e.id === id);
  //   console.log("exisidis", existingId);
  //   if (existingId) {
  //     console.log("inded if existingID");
  //     const valExist = existingId.choosenAnswer.find(
  //       (e: any) => e === event.target.name
  //     );
  //     console.log("value of valExist is", valExist);

  //     //   if (valExist && event.target.checked) {
  //     //     console.log("inside valExist and event.target.checkd");
  //     //     existingId.choosenAnswer?.push(event.target.name);
  //     //   }
  //     //else
  //     if (valExist && !event.target.checked) {
  //       console.log("inded valExist and !event.target.checked");
  //       // const newData = valExist.choosenAnswer?.filter((e: any) => {
  //       //   return e !== event.target.name;
  //       // });
  //       var index = existingId.choosenAnswer.indexOf(event.target.name);
  //       if (index !== -1) {
  //         existingId.choosenAnswer.splice(index, 1);
  //       }
  //     } else {
  //       console.log("in else part of valexist false");
  //       existingId.choosenAnswer.push(event.target.name);
  //     }
  //   } else {
  //     console.log("inside main else part");
  //     setState((prev: any) => [
  //       ...prev,
  //       { id: id, choosenAnswer: [event.target.name] },
  //     ]);
  //   }

  //   console.log("value of state is", state);

  //   //   ...state,
  //   //   [event.target.name]: event.target.checked,
  // };

  return (
    <>
      <Box>
        <Typography>{`${question.questionNumber}. ${question.questionText.question}`}</Typography>
        <FormGroup>
          {question.questionText.options.map((option: any, index: any) => {
            return (
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={(event) =>
                      handleCheckboxAnswerChange(
                        event,
                        question.questionText.id
                      )
                    }
                    name={option.value}
                  />
                }
                label={option.label}
                key={index}
              />
            );
          })}
        </FormGroup>
      </Box>
    </>
  );
};
export default CheckboxComponent;
