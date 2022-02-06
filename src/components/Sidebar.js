import React from "react";
import github from "../assets/icons/github.svg";
import pin from "../assets/icons/pin.svg";
import resume from "../assets/icons/resume.png";
import mightycoder from "../assets/mightycoder.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={mightycoder} alt="avatar" className="sidebar_avatar" />
      <div className="sidebar_name">
        Peter <span>Marton</span>
      </div>
      <div className="sidebar_item sidebar_title">Junior Web Developer</div>
      <a href="">
        <div className="sidebar_item sidebar_resume">
          <img src={resume} alt="resume" className="sidebar_icon" />
          Download Resume
        </div>
      </a>
      <div className="sidebar_contact sidebar_github">
        <div className="sidebar_item">
          <a href="">
            {" "}
            <img src={github} alt="github" className="sidebar_icon mr-3" />
            Github
          </a>
        </div>
        <div className="sidebar_location">
          <img src={pin} alt="location" className="sidebar_icon mr-3"/>
          Liverpool, United Kingdom</div>
        <div className="sidebar_item">martonpeter18@gmail.com</div>
        <div className="sidebar_item">07799210282</div>
      </div>
      <div className="sidebar_item sidebar_email">Email me</div>
    </div>
  );
};

export default Sidebar;
