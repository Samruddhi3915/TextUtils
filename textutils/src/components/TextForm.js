import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    let upper = title.toUpperCase();
    setTitle(upper);
    props.showAlert("Converted to upper case", "success");
  };
  const handleClearClick = () => {
    let title = "";
    setTitle(title);
    props.showAlert("Text is cleared", "success");
  };
  const handleLowClick = () => {
    let lower = title.toLowerCase();
    setTitle(lower);
    props.showAlert("Converted to Lower case", "success");
  };
  const handleOnChange = (event) => {
    console.log("Onchange");
    setTitle(event.target.value);
  };

  const handleCopy = () => {
    console.log("Text copied");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied", "success");
  };
  const handleExtraSpaces = () => {
    let newText = title.split(/[ ]+/);
    //this regex will remove spaces >1 and form an array which will later be joined by " "
    setTitle(newText.join(" "));
    props.showAlert("Extra spaces trimmed", "success");
  };
  const [title, setTitle] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={title}
            onChange={handleOnChange}
            //{}-to write js and {} for object therefore {{}}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary my-4 mx-3" onClick={handleUpClick}>
          Convert to upper case
        </button>
        <button className="btn btn-primary my-4" onClick={handleLowClick}>
          Convert to Lower case
        </button>
        <button
          className="btn btn-primary my-4 mx-3"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button className="btn btn-primary my-4 mx-3" onClick={handleCopy}>
          Copy Text
        </button>
        <button
          className="btn btn-primary my-4 mx-3"
          onClick={handleExtraSpaces}
        >
          Remove extra spaces
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>Your Text Summary:</h1>
        <p>
          {title.split(" ").length} words and {title.length} characters
        </p>
        <p>{0.008 * title.split(" ").length} Minutes required to read</p>
        <h2>Preview: </h2>
        <p>
          {title.length > 0
            ? title
            : "Enter something in the above textbox to preview"}
        </p>
      </div>
    </>
  );
}
