import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import home from '../assets/img/home.png';
import '../styles/NavBar.css';
import navIcon1 from '../assets/img/nav-icon1.webp';
import navIcon2 from '../assets/img/nav-icon2.webp';
import navIcon3 from '../assets/img/resume.webp';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={`custom-navbar ${scrolled ? "scrolled" : ""}`}>
        <Container>
          <Navbar.Brand href="/">
            <img src={home} alt="Home" style={{ width: "45px", height: "45px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link href="#education" className={activeLink === 'education' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('education')}>Education</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/priyanka-jawalkar20/"><img src={navIcon1} alt="linkedin" /></a>
                <a href="https://github.com/PriyaJ31"><img src={navIcon2} alt="github" /></a>
                <a href="https://github.com/PriyaJ31/Resume/blob/main/PriyankaJawalkar.pdf"><img src={navIcon3} alt="resume"/></a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd pastel-button"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
