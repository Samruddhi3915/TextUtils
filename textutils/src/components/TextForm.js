import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    let upper = title.toUpperCase();
    setTitle(upper);
  };
  const handleClearClick = () => {
    let title = "";
    setTitle(title);
  };
  const handleLowClick = () => {
    let lower = title.toLowerCase();
    setTitle(lower);
  };
  const handleOnChange = (event) => {
    console.log("Onchange");
    setTitle(event.target.value);
  };

  const [title, setTitle] = useState("");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={title}
            id="myBox"
            onChange={handleOnChange}
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
      </div>
      <div className="container">
        <h1>Your Text Summary:</h1>
        <p>
          {title.split(" ").length} words and {title.length} characters
        </p>
        <p>{0.008 * title.split(" ").length} Minutes required to read</p>
        <h2>Preview: </h2>
        <p>{title}</p>
      </div>
    </>
  );
}
