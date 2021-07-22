import React from "react";

import logo from "../../assets/images/logo.png";

import "./splash.css";

const Splash = () => (
  <div className="splash">
    <div className="splash__content">
      <img src={logo} alt="Kubiquity Logo"></img>
      <div>The Real-Time Kubernetes Error-Monitoring Tool</div>
    </div>
  </div>
);

export default Splash;
