import React, { useContext } from "react";
import {useNavigate} from "react-router-dom";
import { BrowserRouter as Router,Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContectProvider";
import StartQuiz from "./screens/quiz/StartQuiz";
import RoutesPage from "./routes/RoutesPage";

import RmsHome from "./components/modifications/RmsHome"
import SubjectExpert from "./components/modifications/SubjectExpert";
import Interviewer from "./components/modifications/Interviewer";

function App() {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

    const handleClick = () => {
        navigate("/routes/RoutesPage");
    }

  // Show the loading spinner while the user is not authenticated
  if (!authContext.isAuthenticated) {
    return <p>Loading</p>;
  }
  // If the user is authenticated display the home component
  else {
    return (
    //   <>
    //     {/* {console.log(
    //       "the valueof authcontext is",
    //       authContext,
    //       authContext.isAuthenticated
    //     )} */}
    //     {/* <Canvas componentProps={componentProps} getComponent={GET_ALL_COMPONENTS} layoutConfig={uiJson} /> */}
    //     {/* <StartQuiz /> */}
    //     {/* <button onClick={authContext.logout}>logout</button> */}

    //     {/* <RoutesPage /> */}
    //     {/* <h1>select Role</h1>
    //     <NavLink to="./routes/RoutesPage"> Dashboard </NavLink>
    //     <button>candidate</button> */}
    //     <button onClick={handleClick} type="button">Candidate</button>
    //   </>
    // );
  //   <Routes>
  //   <Route path="/" element={<StartQuiz />} />
  // </Routes>
        <Routes>
          <Route path="/" element={<RmsHome />} />
          <Route path="/assignments" element={<SubjectExpert />} />
          <Route path="/reviewer" element={<Interviewer />} />
          <Route path="/quiz" element={<StartQuiz />} />
        </Routes>
    )
  }
}

export default App;
