import React from "react";

import "./maincontent.css";

import LinkButton from "../mainContent/LinkButton";
import Feature from "./Feature";

const FEATURE_CROSS_PLATFORM =
  "A lightweight application built using React.js and Electron with multi-platform support and planned Mac support.";
const FEATURE_PERSISTENT_LOGGING =
  "Capture every event eminating from your Kubernetes cluster. Kubiquity persists event logs and stores them locally using Electron JSON storage. Event logs can even be saved as a CSV file for future reference.";
const FEATURE_SEARCHABLE_LOGS =
  "Find exactly what you're looking for in real time with an easy to use search function.";
const FEATURE_METRICS =
  "Plug and play solution that automatically queries Prometheus for CPU and memory usage.";

const MainContent = () => (
  <div className="main-content">
    <div className="buttons-container">
      <LinkButton
        id="download"
        header="Download Kubiquity for Windows/Linux"
        subHeader="Find the latest stable release here."
        link="https://github.com/oslabs-beta/Kubiquity/releases/tag/v1.0.0"
      />
      <LinkButton
        id="github"
        header="Kubiquity Documentation"
        subHeader="Find the instructions for Kubiquity here."
        link="https://github.com/oslabs-beta/Kubiquity"
      />
    </div>
    <div id="feature-container" className="feature-container">
      <h2>Features</h2>
      <Feature
        header="Persistent Logging"
        text={FEATURE_PERSISTENT_LOGGING}
        img="https://i.imgur.com/BzelNwo.png"
        isImgLeft={true}
      />
      <Feature
        header="Searchable Logs"
        text={FEATURE_SEARCHABLE_LOGS}
        img="https://i.imgur.com/nFz7yLd.png"
        isImgLeft={false}
      />
      <Feature
        header="CPU and Memory Metrics"
        text={FEATURE_METRICS}
        img="https://i.imgur.com/0uk71q2.png"
        isImgLeft={true}
      />
      <Feature
        header="Multi-Platform Desktop Application"
        text={FEATURE_CROSS_PLATFORM}
        img="https://i.imgur.com/TOGFO6s.jpg"
        isImgLeft={false}
      />
    </div>
  </div>
);

export default MainContent;
