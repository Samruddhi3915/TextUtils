import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import AlertReact from "./components/AlertReact";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils-Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils-Light Mode";
    }
  };
  return (
    <>
      <div className="container my-3">
        {/* <BrowserRouter> */}
        <Navbar
          title="TextUtils"
          text="About"
          mode={mode}
          toggleMode={toggleMode}
        ></Navbar>
        <AlertReact alert={alert} />
        {/* <Routes> */}
        {/* <Route exact path="/about" element={<About />} />

            <Route */}
        {/* exact
              path="/"
              element={ */}
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze below"
          mode={mode}
        />
        {/* } */}
        {/* /> */}
        {/* </Routes> */}
        {/* </BrowserRouter> */}
      </div>
    </>
  );
}

export default App;
