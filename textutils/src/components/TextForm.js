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
    navigator.clipboard.writeText(title);

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
        <h1 className="mb-4"> {props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={title}
            onChange={handleOnChange}
            //{}-to write js and {} for object therefore {{}}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={title.length === 0}
          className="btn btn-primary my-1 mx-1"
          onClick={handleUpClick}
        >
          Convert to upper case
        </button>
        <button
          disabled={title.length === 0}
          className="btn btn-primary my-1 mx-1"
          onClick={handleLowClick}
        >
          Convert to Lower case
        </button>
        <button
          disabled={title.length === 0}
          className="btn btn-primary my-1 mx-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          disabled={title.length === 0}
          className="btn btn-primary my-1 mx-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={title.length === 0}
          className="btn btn-primary my-1 mx-1"
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
          {
            //will remove all "" and will have 0 words at initial stage of react application
            // split with space and newline to take all possible words
            title.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {title.length} characters
        </p>
        <p>
          {/* using filter the timer will start from 0 minutes */}
          {0.008 *
            title.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes required to read
        </p>
        <h2>Preview: </h2>
        <p>{title.length > 0 ? title : "Nothing to preview"}</p>
      </div>
    </>
  );
}
