import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
//import { Link } from "react-router-dom";
import {AiOutlineFundProjectionScreen,} from "react-icons/ai";
import {MdContacts} from "react-icons/md"
import {ImHome} from "react-icons/im"
import {FcAbout} from "react-icons/fc"
import {GiSkills,GiNotebook} from "react-icons/gi"
import {BiBookContent} from "react-icons/bi"

//import {CgGitFork } from "react-icons/cg";
//import { Button } from "react-bootstrap";

function NavBar() {
  const [expand, setExpanded] = useState(false);
  const [navColour, setNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }
  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Nav.Link  to="/" className="d-flex">
          <h2 style={{ color:"white", fontWeight: "bolder" }}>R SAI KIRAN</h2>
        </Nav.Link>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            setExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link  to="/" onClick={() => setExpanded(false)}>
                <ImHome style={{ marginBottom: "4px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                //as={Link}
                to="/about"
                onClick={() => setExpanded(false)}
              >
                <FcAbout style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                //as={Link}
                to="/about"
                onClick={() => setExpanded(false)}
              >
                <GiSkills style={{ marginBottom: "2px" }} /> Skills
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                //as={Link}
                to="/project"
                onClick={() => setExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                //as={Link}
                to="/about"
                onClick={() => setExpanded(false)}
              >
                <MdContacts style={{ marginBottom: "2px" }} /> Contact
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                //as={Link}
                to="/about"
                onClick={() => setExpanded(false)}
              >
                <GiNotebook style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

