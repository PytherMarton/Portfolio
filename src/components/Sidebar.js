import React from "react";
import github from "../assets/icons/github.svg";
import pin from "../assets/icons/pin.svg";
import resumeImg from "../assets/icons/resume.png";
import avatar from "../assets/avatar.svg";
import resume from "../assets/Peter-Marton-resume.pdf";
import linkedIn from "../assets/icons/linkedin.png";
import { motion } from "framer-motion";

const Sidebar = () => {

  const sidebar_variant = {
    hidden: {
      x: "-20vh",
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.1,
        duration: 0.5,
        type: "spring",
      },
    },
  };

  return (
    <motion.div
      className="sidebar"
      variants={sidebar_variant}
      initial="hidden"
      animate="visible"
    >
      <img src={avatar} alt="avatar" className="sidebar_avatar" />
      <div className="sidebar_name">
        Peter <span>Marton</span>
      </div>
      <div className="sidebar_item sidebar_title">Junior Web Developer</div>
      <a href={resume} download="Peter-Marton-resume.pdf">
        <div className="sidebar_item sidebar_resume">
          <img src={resumeImg} alt="resume" className="sidebar_icon" />
          Download Resume
        </div>
      </a>
      <div className="sidebar_contact sidebar_github">
        <div className="sidebar_item">
          <a href="https://github.com/PytherMarton">
            {" "}
            <img src={github} alt="github" className="sidebar_icon mr-3" />
            Github
          </a>
        </div>
        <div className="sidebar_item">
          <a href="https://linkedin.com/in/petermartonpm">
            {" "}
            <img src={linkedIn} alt="linkedIn" className="sidebar_icon mr-3" />
            LinkedIn
          </a>
        </div>

        <div className="sidebar_location">
          <img src={pin} alt="location" className="sidebar_icon mr-3" />
          Liverpool, United Kingdom
        </div>
        <div className="sidebar_item">martonpeter18@gmail.com</div>
        <div className="sidebar_item">07799210282</div>
      </div>

      <div className="sidebar_item sidebar_email">
        <a href="mailto:martonpeter18@gmail.com">Email me </a>
      </div>
    </motion.div>
  );
};

export default Sidebar;
