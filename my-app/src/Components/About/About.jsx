import React, { useContext } from "react";

import "./About.css";



function About() {
  
  return (
    <div
      className="about"
      id="about"
      style={{background:"#fadecd"}}
    >
      <div className="line-styling">
        <div
          className="style-circle"
          
        ></div>
        <div
          className="style-circle"
          
        ></div>
        <div
          className="style-line"
          
        ></div>
      </div>
      <div className="about-body">
        <div className="about-description" >
          <h2 className="h2">About Me</h2>
          <p style={{textShadow:"2px 2px 5px #76263f"}}>
          My name's R Sai Kiran. I'm a Full Stack Web developer
            <br />
            <br />
            I am a graduate in BCA(Bachelor of Computer Application) in 2021, I don’t have any formal work experience but got hands-on experience building projects at Masai school. I work on interesting projects. I got to use HTML, CSS, JAVASCRIPT, and MERN stack extensively during these projects. I willingness to accept every task assigned to me.No matter if the given task or project is easy or difficult. I won't say no to whatever assign to me. I like to accept challenges because I get to learn more from them.
          </p>
        </div>
        <div className="about-img">
          {/*<img
            src={aboutData.image}
            // src={aboutData.image === 1 ? theme.aboutimg1 : theme.aboutimg2}
            alt=""
  />*/}
        </div>
      </div>
    </div>
  );
}

export default About;