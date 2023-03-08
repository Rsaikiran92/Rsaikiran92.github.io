import React from "react";

import "./About.css";

export const educationData = [
  {
    id: 1,
    institution: "Masai School, Bengaluru",
    course: "MERN Stack",
    startYear: "2022",
    endYear: "2022",
  },
  {
    id: 2,
    institution: "Trident Academy of Creative Technology, Bhubaneswar",
    course: "Bachelor of Computer Application",
    startYear: "2018",
    endYear: "2021",
  },
  {
    id: 3,
    institution: "MP & EV English Medium School",
    course: "Board of intermediate school (C.B.S.E)",
    startYear: "2016",
    endYear: "2018",
  },
];


function About() {
  
  return (
    <div className="about"  id="about"   style={{background:"#fadecd"}} >

      <div className="line-styling">
        <div  className="style-circle"></div>
        <div  className="style-circle" ></div>
        <div  className="style-line" ></div>
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
      </div>

      <div  className="education">
        <div className="education-body">
          <div className="education-description">
            <h1 className="h2">Education</h1>
            {educationData.map((item) => (
              <div key={item.id} className={`education-card`}>
                <div className="educard-img" style={{ backgroundColor: "#76263f" }}>
                  <img
                    src={"https://raw.githubusercontent.com/abdulquadir77/abdulquadir77.github.io/92dc27bc93d3d4a35851f3c7f8388da7cb40a25b/src/assets/svg/education/eduImgWhite.svg"}
                    alt=""
                  />
                </div>
                <div className="education-details">
                  <h6 className="text">
                    {item.startYear}-{item.endYear}
                  </h6>
                  <h4 className="text">{item.course}</h4>
                  <h5 className="text">{item.institution}</h5>
                </div>
              </div>
            ))}
          </div>
          <div className="education-image">
            <img  src={"https://blush.design/api/download?shareUri=LavBnWufRf&w=800&h=800&fm=png"} alt=""/>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default About;