import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// let name = "Aman";
// let src = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg";
function App() {
  // const flexSwitchCheck = document.getElementById("flexSwitchCheck");
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.color = "white";
      showAlert("dark mode has been enable", "success");
    } else {
      setMode("light");
      document.body.style.color = "black";
      showAlert("Light mode has been enable", "success");
    }
  };

  return (
    <>
      <BrowserRouter>
        <div className={`bg-${mode}`}>
          <Navbar
            title="Aman's Navbar"
            // style={myStyle}
            about="About us1"
            // ref={About}
            mode={mode}
            toggleMode={toggleMode}
          ></Navbar>
          <Alert alert={alert} />
          <div className="container">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <TextForm
                    showAlert={showAlert}
                    heading="enter the text to analyze"
                  />
                }
              />
              <Route exact path="/about" element={<About />} />
            </Routes>
            {/* <TextForm showAlert={showAlert} heading="enter the text to analyze" /> */}
          </div>
          {/* <About /> */}
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
