import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import AlertReact from "./components/AlertReact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
  // logic for changing mode usig color palette
  // const removeBodyClasses = () => {
  //   document.body.classList.remove("bg-light");
  //   document.body.classList.remove("bg-dark");
  //   document.body.classList.remove("bg-warning");
  //   document.body.classList.remove("bg-danger");
  //   document.body.classList.remove("bg-success");
  //   document.body.classList.remove("bg-primary");
  // };
  // const toggleMode = (cls) => {
  // removeBodyClasses();
  // console.log(cls);
  // document.body.classList.add("bg-" + cls);
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils-Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils-Light Mode";
    }
  };
  return (
    <>
      <div className="container my-3">
        <BrowserRouter>
          <Navbar
            title="TextUtils"
            text="About"
            mode={mode}
            toggleMode={toggleMode}
          ></Navbar>
          <AlertReact alert={alert} />
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />

            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Try TextUtils"
                  // heading="Try TextUtils- Word and Charcter Counter, Remove extra spaces,Change cases of string"
                  mode={mode}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
