import React from "react";
import Bar from "./Bar";
import github from "../assets/icons/github.png";
import javascript from "../assets/icons/js.png";
import python from "../assets/icons/python.png";
import html from "../assets/icons/html.png";
import reactpng from "../assets/icons/react.png";
import css from "../assets/icons/css.png";
import git from "../assets/icons/git.png";
import slack from "../assets/icons/slack.png";
import stack from "../assets/icons/stack.png";
import trello from "../assets/icons/trello.png"

const Resume = () => {
  const languages = [
    {
      icon: html,
      name: "HTML",
      level: "90",
    },
    {
      icon: python,
      name: "Python",
      level: "50",
    },
    {
      icon: javascript,
      name: "JavaScript",
      level: "70",
    },
    {
      icon: reactpng,
      name: "React",
      level: "62",
    },
    {
      icon: css,
      name: "CSS",
      level: "80",
    },
  ];

  const tools = [
    {
      icon: github,
      name: "GitHub",
      level: "70",
    },
    {
      icon: git,
      name: "Git",
      level: "75",
    },
    {
      icon: slack,
      name: "Slack",
      level: "68",
    },
    {
      icon: trello,
      name: "Trello",
      level: "80",
    },
    {
      icon: stack,
      name: "Stack Overflow",
      level: "80",
    },
  ];

  return (
    <div className="container resume">
      <div className="row">
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card_heading">Education</h4>
          <div className="resume-card_body">
            <h5 className="resume-card_title">NVQ Level 4 Master Software</h5>
            <p className="resume-card_name">Code Nation</p>
            <p className="resume-card_details">
            I have completed this 12 weeks course to become a technical professional and start a career as a Junior Full-stack Web Developer. For more details check out my LinkedIn or download Resume.
            </p>
          </div>
        </div>
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card_heading">Experience</h4>
          <div className="resume-card_body">
            <h5 className="resume-card_title">Full-Stack Project</h5>
            <p className="resume-card_name">Code Nation</p>
            <p className="resume-card_details">
              We have created a Full-Stack project and many other projects, you can see them by clicking on "Projects".
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 resume-languages">
          <h5 className="resume-language_heading">Languages and Frameworks</h5>
          <div className="resume-language_body mt-3">
            {languages.map((language) => (
              <Bar value={language} />
            ))}
          </div>
        </div>
        <div className="col-lg-6 resume-languages">
          <h5 className="resume-language_heading">Tools and Softwares</h5>
          <div className="resume-language_body mt-3">
            {tools.map((tool) => (
              <Bar value={tool} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
