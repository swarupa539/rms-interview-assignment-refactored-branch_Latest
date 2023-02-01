// import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import AllQuestions from "../components/modifications/AllQuestions";
import PageNotFound from "../components/modifications/PageNotFound";
import TestCompleted from "../components/modifications/TestCompleted";
import StartQuiz from "../screens/quiz/StartQuiz";

const testAllreadyCompleted = false;

const RoutesPage = () => {
  const navigate = useNavigate();

  //   if (testAllreadyCompleted) {
  //     navigate("/test_submitted");
  //   }
  useEffect(() => {
    if (testAllreadyCompleted) {
      console.log("allready completed");
      navigate("/test_submitted");
    }
  }, []);
  return (
    // <BrowserRouter>
    <Routes>
      <Route path="/" element={<StartQuiz />} />
      <Route path="test_submitted" element={<TestCompleted />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    // </BrowserRouter>
  );
};
export default RoutesPage;
