import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import { AiFillLinkedin } from "react-icons/ai";
import {FaGithubSquare} from "react-icons/fa"
import { ImFolderDownload } from "react-icons/im";


import "./Home.css"

function Home() {
    return (
      <div className="home" >
        <Container fluid className="home-section" id="home" >
          
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header" >
                <h1 style={{ paddingBottom: 15 ,textShadow:"2px 2px 5px #76263f" }} className="heading">
                  Hello{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>
  
                <h1 className="heading-name">
                  I'm
                  <strong className="main-name"> R Sai Kiran</strong>
                </h1>
  
                <div style={{ padding: 10, textAlign:"justify" ,fontSize:"25px",textShadow:"2px 2px 5px #76263f" }}>
                  Aspiring Full Stack Web Developer at Masai School capable to write program using javascript,CSS,HTML for forntend and i am interested and passionate about voding to build a new products-based company 
                </div>
                <a href="./Resume/R-saikiran-Resume.pdf" download className="btn btn2" style={{color:"#76263f"}}><ImFolderDownload style={{marginBottom:"5px",marginRight:"5px"}}/>Resume</a>
                <div className="iconbtn" style={{width:"100px",display:"flex",alignItems:"center",justifyContent:"center",marginTop:"10px"}} >
                        <a target={"_blank"} rel="noreferrer"  href="https://github.com/Rsaikiran92"><FaGithubSquare/></a>
                        <a target={"_blank"} rel="noreferrer" href="https://www.linkedin.com/in/r-sai-kiran-451a07232/"><AiFillLinkedin  /></a>
                        
                </div>
              </Col>
  
              <Col md={4} className="myAvtar" style={{ paddingBottom: 20,margin:"auto"}}>
                <img
                  align="center"
                  width={"100%"}
                  src="https://avatars.githubusercontent.com/u/103918668?v=4"
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "450px"}}
                />
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    );
  }
  
  export default Home;