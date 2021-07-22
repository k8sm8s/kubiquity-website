import React from "react";

import "./maincontent.css";

const FEATURE_CROSS_PLATFORM = "A lightweight application built using React.js and Electron with multi platform support.";
const FEATURE_PERSISTENT_LOGGING = "Using Electron JSON storage, logs are persisted throughout the entire session and can even be saved as a CSV file.";
const FEATURE_SEARCHABLE_LOGS = "Find exactly what you're looking for in real time with an easy to use search function.";
const FEATURE_METRICS = "Plug and play solutiuon that automatically queries Prometheus for CPU and memory usage.";

const MainContent = () => (
  <div className="main-content">
    <div className="feature-container">
      <h1>Features</h1>
      <div id="feature1" className="feature-item">
        <h3>Multi Platform Desktop Application</h3>
        <p>{FEATURE_CROSS_PLATFORM}</p>
        <img id="multi-platform" src="https://i.imgur.com/TOGFO6s.jpg" alt="Multi Platform" height='400' width='500'/>
      </div>
      <div id="feature2" className="feature-item">
        <h3>Persistent Logging</h3>
        <p>{FEATURE_PERSISTENT_LOGGING}</p>
        <img id="persistent-logging" src="https://i.imgur.com/BzelNwo.png" alt="Persistent Logging" height='400' width='500'/>
      </div>
      <div id="feature3" className="feature-item">
        <h3>Searchable Logs</h3>
        <p>{FEATURE_SEARCHABLE_LOGS}</p>
        <img id="searchable-logs" src="https://i.imgur.com/nFz7yLd.png" alt="Searchable Logs" height='400' width='500'/>
      </div>
      <div id="feature4" className="feature-item">
        <h3>Access Prometheus CPU and Memory metrics</h3>
        <p>{FEATURE_METRICS}</p>
        <img id="metrics" src="https://i.imgur.com/0uk71q2.png" alt="Metrics" height='400' width='500'/>
      </div>
    </div>
  </div>
);

export default MainContent;
