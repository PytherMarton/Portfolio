import React from "react";
import facebook from "../assets/icons/facebook.svg"

const Sidebar = () => {
  return (
    <div>
      <img src="" alt="avatar" className="sidebar_avatar" />
      <div className="sidebar_name">
        Submit <span>Peter</span>
      </div>
      <div className="sidebar_item sidebar_title">Junior Web Developer</div>
      <a href="">
        <div className="sidebar_item">
          <img src="" alt="resume" className="sidebar_icon" />
          Download Resume
        </div>
      </a>
      <figure className="sidebar_social-icons">
        <a href="">
          {" "}
          <img src="" alt="facebook" className="sidebar_icon" />
        </a>
        <a href="">
          {" "}
          <img src="" alt="instagram" className="sidebar_icon" />
        </a>
      </figure>
      <div className="contact">
        <div className="sidebar_icon">
          <a href="">
            {" "}
            <img src="" alt="github" className="sidebar_icon"/>Github
          </a>
        </div>
        <div className="sidebar_item">martonpeter18@gmail.com</div>
        <div className="sidebar_item">07799210282</div>
      </div>
      <div className="sidebar_item sidebar_email">Email me</div>
    </div>
  );
};

export default Sidebar;
