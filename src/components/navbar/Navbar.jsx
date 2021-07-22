import React from "react";

import "./navbar.css";

const Navbar = () => (
  <div className="navbar">
    <div id="navbar-left">
    <a id="download-anchor" className="navbar-tag" href="https://github.com/oslabs-beta/Kubiquity/releases/tag/v1.0.0">
        Download
      </a>
      <a id="github-anchor" className="navbar-tag" href="https://github.com/oslabs-beta/Kubiquity">
        GitHub
      </a>
      <a id="github-anchor" className="navbar-tag" href="https://medium.com/@kubiquityapp/kubiquity-a-kubernetes-error-monitoring-tool-385b41bea0c0">
        Blog
      </a>
    </div>
    <div id="navbar-right">
    <a id="home-anchor" className="navbar-tag" href="https://www.kubiquity.io/">
        Home
      </a>
      <a id="features-anchor" className="navbar-tag" href="#feature-container">
        Features
      </a>
      <a id="about-anchor" className="navbar-tag" href="#about-container">
        About
      </a>
      <a id="contact-anchor" className="navbar-tag" href="#members">
        Contact
      </a>
    </div>
  </div>
);

export default Navbar;
