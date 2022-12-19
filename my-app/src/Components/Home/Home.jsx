import React from "react";
import { Container, Row, Col, Button, Nav} from "react-bootstrap";
import {FaGithub,FaLinkedinIn,FaTwitter} from "react-icons/fa"
import {socialsData} from "./Data"

import "./Home.css"

function Home() {
    return (
      <section className="home" >
        <Container fluid className="home-section" id="home">
          
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15 ,color:"red"}} className="heading">
                  Hii{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>
  
                <h1 className="heading-name">
                  I'm
                  <strong className="main-name"> R Sai Kiran</strong>
                </h1>
  
                <div style={{ padding: 10, paddingLeft:"40px", textAlign:"justify" ,fontSize:"25px" }}>
                  Aspiring Full Stack Web Developer at Masai School capable to write program using javascript , CSS , HTML for forntend and i am interested and passionate about voding to build a new products-based company 
                </div>
                <Button style={{backgroundColor:"#76263f",marginLeft:"40px" , borderColor:"#76263f"}} >Resume</Button>
                <Col style={{marginLeft:"30px",width:"100px",display:"flex",alignItems:"center",justifyContent:"center",gap:"1rem",marginTop:"10px"}} >
                <a
                  href={socialsData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  
                >
                  <FaGithub aria-label="GitHub" />
                </a>
                <button>
                <a
                  href={socialsData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{border:"1px solid red"}}
                  
                >
                  <FaLinkedinIn aria-label="LinkedIn" />
                </a></button>
                <a
                  
                  target="_blank"
                  rel="noreferrer"
                 
                >
                  <FaTwitter aria-label="Twitter" />
                </a>
                </Col>
              </Col>
  
              <Col md={5} style={{ paddingBottom: 20 }}>
                <img
                  src="https://avatars.githubusercontent.com/u/103918668?v=4"
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "450px" }}
                />
              </Col>
            </Row>
          </Container>
        </Container>
      </section>
    );
  }
  
  export default Home;