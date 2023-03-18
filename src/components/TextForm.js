import React, { useState } from "react";

export default function TextForm(props) {
  const handleClick = () => {
    // console.log("is clicked");
    setText(text.toUpperCase());
    props.showAlert("converted to upper case", "success");
  };
  const handleLoClick = () => {
    // console.log("is clicked");
    setText(text.toLowerCase());
    props.showAlert("converted to lower case", "success");
  };

  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };
  const handleClear = () => {
    // console.log("on change");

    setText(" ");
    props.showAlert("Text has been cleared", "success");
  };
  const inverseCase = () => {
    // console.log("on change");
    let split = text.split("");
    let reverse = split.reverse();
    setText(reverse.join(""));
    props.showAlert("Text has been reversed", "success");
  };

  const [text, setText] = useState("ENter text here");
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="5"
            placeholder={props.heading}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleClick}>
          Convert to upperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to lowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>
          Clear
        </button>
        <button className="btn btn-primary mx-2" onClick={inverseCase}>
          Inverse this paragraph
        </button>
        {}
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <h6>
          {text.split(" ").length - 1} word, and {text.length} characters
        </h6>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h5>Preview</h5>
        <p>{text}</p>
      </div>
    </>
  );
}
