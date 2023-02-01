import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import StartQuiz from "./screens/quiz/StartQuiz";
import AuthContextProvider from "./context/AuthContectProvider";
import { BrowserRouter } from "react-router-dom";
// import Canvas from './uiEngine/Canvas';

const root = createRoot(document.getElementById("root") as HTMLElement);

// TODO: <Canvas /> is for the Layout make sure to uncomment the same to use that
// TODO: <Layout /> is for the component to take help for writing the uiEngine in <Canvas /> component

root.render(
  // <React.StrictMode>
  <AuthContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* <Canvas componentProps={componentProps} getComponent={GET_ALL_COMPONENTS} layoutConfig={uiJson} /> */}
    {/* <Layout /> */}
  </AuthContextProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
