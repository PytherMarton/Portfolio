import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container app_container">
          <div className="row app_row">
            <div className="col-lg-3">
              <Sidebar />
            </div>
            <div  className="col-lg-9 app_main_content">
              <Navbar />

              <Routes>
                <Route exact path="/" element={<About />} />
                <Route exact path="/resume" element={<Resume />} />
                <Route exact path="/projects" element={<Projects />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
