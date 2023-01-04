import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import {AiOutlineFundProjectionScreen,} from "react-icons/ai";
import {MdContacts} from "react-icons/md"
import {ImHome} from "react-icons/im"
import {FcAbout} from "react-icons/fc"
import {GiSkills,GiNotebook} from "react-icons/gi"

import "./Navbar.css"
import "../Resume/R-saikiran-Resume.pdf"


function NavBar() {
  return (
    <Navbar
      fixed="top"
      expand="md"
     
    >
      <Container>
        <a  href="#home" className="d-flex nav-link">
          <h2 style={{ color:"white", fontWeight: "bolder" }}>R SAI KIRAN</h2>
        </a>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <a className="nav-link"  href="#home" 
              
              >
                <ImHome style={{ marginBottom: "4px" }} /> Home
              </a>
            </Nav.Item>

            <Nav.Item>
              <a
                className="nav-link"
                style={{textDecoration:"none"}}
                href="#about"
                
              >
                <FcAbout style={{ marginBottom: "2px" }} /> About
              </a>
            </Nav.Item>
            <Nav.Item>
              <a
                className="nav-link"
                href="#skills"
              
              >
                <GiSkills style={{ marginBottom: "2px" }} /> Skills
              </a>
            </Nav.Item>

            <Nav.Item>
              <a
                className="nav-link"
                href="#projects"
              
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </a>
            </Nav.Item>
            <Nav.Item>
              <a
                className="nav-link"
                href="#contact"
               
              >
                <MdContacts style={{ marginBottom: "2px" }} /> Contact
              </a>
            </Nav.Item>
            <Nav.Item>
              <a
                
                className="nav-link"
                href="../Resume/R-saikiran-Resume.pdf"
                download="R-saikiran-Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <GiNotebook style={{ marginBottom: "2px" }} /> Resume
              </a>
            </Nav.Item>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

