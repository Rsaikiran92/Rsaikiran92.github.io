import React from "react";
import Marquee from "react-fast-marquee";

import "./Skills.css";

//import { ThemeContext } from "../../contexts/ThemeContext";
import { skillsData } from "./SkillsData";
// import { skillsImage } from "../../utils/skillsImage";

function Skills() {
 

  const skillBoxStyle = {
    backgroundColor: "red".secondary,
    boxShadow: `0px 0px 30px ${"red".primary30}`,
  };

  return (
    <div className="skills" style={{ backgroundColor: "#fadecd" }}>
      <div className="skillsHeader">
        <h2 style={{ color: "#76263f" }}>Skills</h2>
      </div>
      <div className="skillsContainer">
        <div className="skill--scroll">
          <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
          >
            {skillsData.map((skill, id) => (
              <div className="skill--box" key={id} style={skillBoxStyle}>
                <img src={skill.image} alt={skill} />
                <h3 style={{ color: "#76263f" }}>{skill.skill}</h3>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default Skills;