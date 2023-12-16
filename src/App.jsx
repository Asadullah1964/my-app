import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };

  useEffect(() => {
    if (alert) {
      const timeout = setTimeout(() => {
        setAlert(null);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [alert]);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextElevate" mode={mode} toggleMode={toggleMode} />
        {alert && <Alert alert={alert} />}
        <div className="container my-3">
          <Routes>
            <Route
              element={
                <TextForm
                  heading="Enter the text to analyze below"
                  showAlert={showAlert}
                  mode={mode}
                />
              }
              exact
              path="/"
            />
            <Route element={<About mode={mode} />} exact path="/about" />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
