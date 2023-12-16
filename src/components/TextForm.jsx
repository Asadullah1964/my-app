import React, { useState, useEffect } from "react";

import './TextForms.css'

export default function TextForms(props) {
  const [showClipboard, setShowClipboard] = useState(true);
  const [showTick, setShowTick] = useState(false);
  const [textHistory, setTextHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const handleOnClick = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  //text = "new text";   wrong way to change the state
  //setText("new text");   correct way

  useEffect(() => {
    setTextHistory((prev) => [...prev, text]);
    setHistoryIndex(textHistory.length);
  }, [text]);

  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLoClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleRemoveExtraSpaces = () => {
    let newText = text.replace(/\s+/g, " ").trim();
    setText(newText);
    props.showAlert("Extra spaces removed!", "success");
  };

  const handleClearClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };

  const handleCopyClick = () => {
    const previewText = document.querySelector(".preview").innerText;
    navigator.clipboard.writeText(previewText);
    setShowClipboard(false);
    setShowTick(true);
    props.showAlert("Copied to clipboard!", "success");
    setTimeout(() => {
      setShowClipboard(true);
      setShowTick(false);
    }, 2000);
  };

  const handleTextCapitalized = () => {
    let newText = text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setText(newText);
    props.showAlert("Text capitalized!", "success");
  };

  const handleSelectAll = () => {
    const textarea = document.getElementById("myBox");
    textarea.select();
    document.execCommand("copy"); // Optional: Copies the selected text to clipboard
    props.showAlert("Text selected!", "success");
  };

  const handleCopyText = () => {
    const textarea = document.getElementById("myBox");
    textarea.select();
    document.execCommand("copy");
    props.showAlert("Text copied to clipboard!", "success");
  };

  const handleUndo = () => {
    if (historyIndex > 0) {
      setTextHistory(textHistory.slice(0, historyIndex));
      setHistoryIndex((prev) => prev - 1);
      setText(textHistory[historyIndex - 1]);
    }
  };

  const handleAlphabetFilter = (char) => {
    const wordsArray = text.split(/\s+/);
    const filteredWords = wordsArray.filter((word) =>
      word.toUpperCase().startsWith(char)
    );
    setText(filteredWords.join(" "));
  };

  const handleMultiplyByTen = () => {
    const currentValue = text;
    const multipliedValue = Array.from({ length: 10 }, () => currentValue).join(
      " "
    );
    setText(multipliedValue);
    props.showAlert("Content multiplied by 10!", "success");
  };

  const handleSeparateWords = () => {
    let newText = text.split(/\s+/).join("\n");
    setText(newText);
    props.showAlert("Words separated into new lines!", "success");
  };
    
  const handleSeparateSentences = () => {
    let newText = text.replace(/([.?!])\s*(?=[A-Za-z])/g, "$1\n");
    setText(newText);
    props.showAlert("Sentences separated into new lines!", "success");
  };

  
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnClick}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#4e4747" : "white",
              color: props.mode === "dark" ? "white" : "#4e4747",
            }}
          ></textarea>
        </div>
        <div className="buttons-container">
  <button
    disabled={text.length === 0}
    className={`btn ${props.mode === 'dark' ? 'btn-dark' : 'btn-secondary'} mx-1 my-1`}
    onClick={handleUpClick}
  >
    UpperCase
  </button>
  <button
    disabled={text.length === 0}
    className={`btn ${props.mode === 'dark' ? 'btn-dark' : 'btn-secondary'} mx-1 my-1`}
    onClick={handleLoClick}
  >
    LowerCase
  </button>
  <button
    disabled={text.length === 0}
    className={`btn ${props.mode === 'dark' ? 'btn-dark' : 'btn-secondary'} mx-1 my-1`}
    onClick={handleRemoveExtraSpaces}
  >
    Remove Extra Spaces
  </button>
  <button
    disabled={text.length === 0}
    className={`btn ${props.mode === 'dark' ? 'btn-dark' : 'btn-secondary'} mx-1 my-1`}
    onClick={handleTextCapitalized}
  >
    Capitalize Text
  </button>
  <button
    disabled={historyIndex <= 0}
    className={`btn ${props.mode === 'dark' ? 'btn-dark' : 'btn-secondary'} mx-1 my-1`}
    onClick={handleUndo}
  >
    Undo
  </button>
  <div className="btn-group mx-1 my-1">
    <button
      disabled={text.length === 0}
      // className="btn btn-secondary dropdown-toggle"
      className={`btn ${props.mode === 'dark' ? 'btn-dark' : 'btn-secondary'} dropdown-toggle mx-1 my-1`}
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      words with
    </button>
    <ul className="dropdown-menu bg-dark" style={{ maxHeight: '200px', overflowY: 'auto', width:'100%', borderRadius:'10px' }}>
  {Array.from(Array(26)).map((_, index) => (
    <li key={index} className="text-center text-light">
      <button
        className="dropdown-item"
        style={{color:'grey'}}
        onClick={() =>
          handleAlphabetFilter(String.fromCharCode(65 + index))
        }
      >
        {String.fromCharCode(65 + index)}
      </button>
    </li>
  ))}
</ul>
  </div>
  <button
    disabled={text.length === 0}
    className={`btn ${props.mode === 'dark' ? 'btn-dark' : 'btn-secondary'} mx-1 my-1`}
    onClick={handleMultiplyByTen}
  >
    x10
  </button>

  <button
  disabled={text.length === 0}
  className={`btn ${props.mode === 'dark' ? 'btn-dark' : 'btn-secondary'} mx-1 my-1`}
  onClick={handleSeparateWords}
>
  Separate Words
</button>

<button
  disabled={text.length === 0}
  className={`btn ${props.mode === 'dark' ? 'btn-dark' : 'btn-secondary'} mx-1 my-1`}
  onClick={handleSeparateSentences}
>
  Separate Sentences
</button>

  <button
    disabled={text.length === 0}
    className={`btn ${props.mode === 'dark' ? 'btn-dark' : 'btn-secondary'} mx-1 my-1`}
    onClick={handleSelectAll}
  >
    Select All
  </button>


  <button
    disabled={text.length === 0}
    className={`btn ${props.mode === 'dark' ? 'btn-dark' : 'btn-secondary'} mx-1 my-1`}
    onClick={handleCopyText}
  >
    Copy Text
  </button>
  <button
    disabled={text.length === 0}
    className={`btn ${props.mode === 'dark' ? 'btn-dark' : 'btn-secondary'} mx-1 my-1`}
    onClick={handleClearClick}
  >
    Clear Text
  </button>
  </div>
</div>

      
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes read
        </p>
        <div className="d-flex gap-3 align-items-center">
          <h3>Preview</h3>
          {showClipboard && (
            <i
              className="fa-solid fa-clipboard fs-3"
              onClick={handleCopyClick}
            ></i>
          )}
          {showTick && <i className="fa-solid fa-check fs-3"></i>}
        </div>
        <div
          className="preview"
          style={{
            border: "1px solid black",
            padding: "8px",
            borderRadius: "10px",
          }}
        >
          {text ? (
            <div dangerouslySetInnerHTML={{ __html: text }}></div>
          ) : (
            <p>No preview available</p>
          )}
        </div>
      </div>
    </>
  );
}
