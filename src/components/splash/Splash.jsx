import React from 'react';

import LinkButton from './LinkButton';

import logo from '../../assets/images/logo.png'

import "./splash.css";

const Splash = () => (
  <div className="splash">
    <div className="splash__content">
      <img src={logo} alt="Kubiquity Logo"></img>
      <LinkButton
        id="download"
        header="Download Kubiquity for Windows/Linux"
        subHeader="Find the latest stable release here."
        link="www.google.com"
      />
      <LinkButton
        id="github"
        header="Kubiquity Documentation"
        subHeader="Find out more about installing and using Kubiquity at our GitHub."
        link="https://github.com/oslabs-beta/Kubiquity"
      />
    </div>
  </div>
);

export default Splash;