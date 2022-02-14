import React from "react";
import api from "../assets/icons/api.svg";
import backend from "../assets/icons/backend.svg";
import algo from "../assets/icons/algo.svg";
import computer from "../assets/icons/computer.svg";
import repair from "../assets/icons/repair.svg";
import puzzle from "../assets/icons/puzzle.svg";

const About = () => {
  const skills = [
    {
      icon: computer,
      title: "Frondend Development",
      about: "I can build a beautiful and scalable SPA using HTML, CSS and React.js"
    },
    {
      icon: repair,
      title: "Backend Development",
      about: "I can Handle databases, servers and API's using MongoDB and MySql"
    },
    {
      icon: api,
      title: "API Development",
      about: "I can develop robust REST API using Node.js and Express.js",
    },
    {
      icon: algo,
      title: "Agile Environment",
      about: "I can work in an Agile environment with timesheets and Trello.",
    },
    {
      icon: puzzle,
      title: "Version Control - Git",
      about: "I can use Git and GitHub for version control and provide collaboration features",
    },
    {
      icon: backend,
      title: "Full-Stack Development",
      about: "I can develop both client and server software in order to create a Full-Stack Web Application",
    }
  ];

  return (
    <div className="about">
    <h6 className="about_intro">
        I describe myself as someone who's persistant, a quick learner and loves problem solving by using simple and scalable solutions.
    </h6>
    <div className="container about_container">
        <h6 className="about_heading">What I offer</h6>
        <div className="row">
            {
                skills.map(skill =>
                  <div className="col-lg-6">
                  <div className="skill-card">
                      <img src={skill.icon} alt="icon" className="skill-card_icon" />
                      <div className="skill-card_body">
                          <h6 className="skill-card_title">{skill.title}</h6>
                          <p className="skill-card_content">{skill.about}</p>
                      </div>
                  </div>
              </div>

                )
            }
        </div>
    </div>
</div>
);
};

export default About;
