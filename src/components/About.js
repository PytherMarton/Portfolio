import React from "react";
import api from "../assets/icons/api.svg";

const About = () => {
  const skills = [
    {
      icon: api,
      title: "Lorem sjifdsjfidsjfsjfisd",
      about: "dsfdsokdsokfosjfjsojfojsdofjdsjfodsjfodsjfodjsfojfds",
    },
    {
      icon: api,
      title: "Lorem sjifdsjfidsjfsjfisd",
      about: "dsfdsokdsokfosjfjsojfojsdofjdsjfodsjfodsjfodjsfojfds",
    },
  ];

  return (
    <div className="about">
      <h6 className="about_intro">
        abfdkbofdkdasdsfdfgksdjnfjsdnjfkndskjbfjdsbfjsdf
      </h6>
      <div className="container about_container">
        <h6 className="about_heading">What I offer</h6>
        <div className="row">
          {skills.map(skill => 
           <div className="col-lg-6">
           <img src={skill.icon} alt="icon" className="skill-card_icon" />
           <div className="skill-card_body">
             <h6 className="skill-card_title">{skill.title}</h6>
             <p className="skill-card_content">{skill.about}</p>
           </div>
         </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
