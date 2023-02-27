import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        text="About"
        mode={mode}
        toggleMode={toggleMode}
      ></Navbar>
      <div className="container my-3">
        <TextForm
          heading="Enter the text to analyze below"
          mode={mode}
        ></TextForm>

        {/* <About></About> */}
      </div>
    </>
  );
}

export default App;
