import React from "react";
import "./Project.css";
import { useState } from "react";
export default function Projects() {
  const [showP2, setShowP2] = useState(false);
  const projects = [
    {
      image: "https://i.postimg.cc/tRB0kScm/Screenshot-2024-02-07-164014.png",
      name: "Purplle.com",
      desc: " It's an ecommerce website in which user can buy all your favourite beauty products, also able to buy at your finger tips.",
      techStack: "React | ChakraUI | MongoDB",
      github: "https://github.com/rishunayak/purplle",
      demo: "https://snazzy-cranachan-14966f.netlify.app/",
    }, {
      image: "https://github.com/Rsaikiran92/Rsaikiran92.github.io/blob/main/my-app/src/Components/Project/images/Screenshot_20230123_105732.png?raw=true",
      name: "bestbuy.com",
      desc: "It's an ecommerce website in which user can buy any type of electronics gadgets.",
      techStack: "React | ChakraUI | Router",
      github: "https://github.com/Durgesh9871/Siliconix",
      demo: "https://siliconix.netlify.app/",
    },
    {
      image: "https://github.com/Rsaikiran92/Rsaikiran92.github.io/blob/main/my-app/src/Components/Project/images/Screenshot_20230124_120103.png?raw=true",
      name: "deccanchronicle.com",
      desc: "It's a news wedside in which user can read any type of news.",
      techStack: "HTML | CSS | Javascript",
      github: "https://github.com/Ravi-047/swank-meeting-7218",
      demo: "",
    },
  ];
  const projects2 = [
  ];

  return (
    <div id="projects" className="pro">
      <h2 className="headingPro">My Projects</h2>
      
      {projects.map((item) => (
        <div key={item.name} className="commonContainer">
          <img className="commonPic" src={item.image} alt={item.name} />
          <div className="projectDetails">
            <h1 className="projectHeading">Clone: {item.name}</h1>
            <p className="projectPara">{item.desc}</p>
            <p className="teckStack">
              <span className="teckSpan">Tech Stack: </span>
              {item.techStack}
            </p>
            <div className="linkingBtn">
              <button className="live">
                <a
                  className="atag"
                  href={`${item.demo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              </button>
              <button className="live">
                <a
                  className="atag"
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </button>
            </div>
          </div>
        </div>
      ))}
      <div>
        {showP2 &&
          projects2.map((item) => (
            <div key={item.name} className="commonContainer">
              <img className="commonPic" src={item.image} alt={item.name} />
              <div className="projectDetails">
                <h1 className="projectHeading">Name: {item.name}</h1>
                <p className="projectPara">{item.desc}</p>
                <p className="teckStack">
                  <span className="teckSpan">Tech Stack: </span>
                  {item.techStack}
                </p>
                <div className="linkingBtn">
                  <button className="live">
                    <a
                      className="atag"
                      href={`${item.demo}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                  </button>
                  <button className="live">
                    <a
                      className="atag"
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        <button
          className={`live atag`}
          style={{
            display: "block",
            margin: "auto",
          }}
          onClick={() => setShowP2(!showP2)}
        >
          {showP2 ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
}