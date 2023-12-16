import React from "react";
import { useState } from "react";


export default function About(props) {
  // const [myStyle , setMyStyle] = useState({
  //   color:'Black',
  //   backgroundColor:'white'
  // })

  let myStyle = {
    color: props.mode == "dark" ? "white" : "#474040",
    backgroundColor: props.mode == "dark" ? "#161313" : "white",
  };

  let myStyle2 = {
    color: props.mode == "dark" ? "white" : "#474040",
    backgroundColor: props.mode == "dark" ? "#292525" : "white",
  };


  return (
    <div
      className="container"
      style={{ color: props.mode == "dark" ? "white" : "#474040" }}
    >
      <h2 className="my-3">About Us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              <strong> Analyze Your text </strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle2}>
              Dive into the world of text analysis effortlessly. Our
              user-friendly platform allows you to input any text and instantly
              uncover its sentiment, keywords, and more. Whether you're a
              writer, researcher, or simply curious, our tools simplify the
              process, making text analysis accessible to all.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              <strong>Free to use </strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle2}>
              Feel free to use and adapt these sentences to highlight the fact
              that your platform provides powerful text analysis tools for free,
              emphasizing the accessibility and inclusivity of your service.{" "}
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              <strong>Browser Compatible </strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle2}>
              Experience text analysis without boundaries. Our platform ensures
              a consistent and seamless user experience across all major
              browsers. Whether you're using Chrome, Firefox, Safari, or Edge,
              you can access our analysis tools effortlessly, enabling you to
              delve into the depths of your text from any device without
              compatibility concerns.{" "}
            </div>
          </div>
        </div>
      </div>

      
      
    </div>
  );
}
