import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
      <div className="App">
        <div className="container app_container">
          <div className="row app_row">
            <div className="col-lg-3">
              <Sidebar />
            </div>
            <div className="col-lg-9 app_main_content">
              <Navbar />

              <AnimatePresence exitBeforeEnter>
                <Routes location={location} key={location.key}>
                  <Route exact path="/" element={<About />} />
                  <Route exact path="/resume" element={<Resume />} />
                  <Route exact path="/projects" element={<Projects />} />
                  <Route path="*" element={<Navigate to="/" />} />
                </Routes>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
