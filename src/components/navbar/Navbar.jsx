import React from "react";

import "./navbar.css";

const Navbar = () => (
  <div className="navbar">
    <div className="navbar-links">
      <a id="home-anchor" className="navbar-tag" href="#homePage">
        Kubiquity
      </a>
      <a id="download-anchor" className="navbar-tag" href="#download">
        Download
      </a>
      <a id="github-anchor" className="navbar-tag" href="#github">
        GitHub
      </a>
      <a id="features-anchor" className="navbar-tag" href="#features">
        Features
      </a>
      <a id="about-anchor" className="navbar-tag" href="#about">
        About
      </a>
      <a id="contact-anchor" className="navbar-tag" href="#contact">
        Contact
      </a>
    </div>
  </div>
);

export default Navbar;
